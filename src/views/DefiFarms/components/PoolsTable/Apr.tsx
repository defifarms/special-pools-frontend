import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, useModal, CalculateIcon, Skeleton, FlexProps, Button } from '@loopstarter/special-uikit'
import RoiCalculatorModal from 'components/RoiCalculatorModal'
import Balance from 'components/Balance'
import { DeserializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getAprData } from 'views/Pools/helpers'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { usePairContract } from 'hooks/useContract'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getPoolApr } from 'utils/apr'

const AprLabelContainer = styled(Flex)`
  &:hover {
    opacity: 0.5;
  }
`

interface AprProps extends FlexProps {
  pool: DeserializedPool
  stakedBalance: BigNumber
  showIcon: boolean
  performanceFee?: number
}

const Apr: React.FC<AprProps> = ({ pool, showIcon, stakedBalance, performanceFee = 0, ...props }) => {
  const {
    stakingToken,
    earningToken,
    isFinished,
    apr,
    earningTokenPrice,
    stakingTokenPrice,
    userData,
    isAutoVault,
    totalStaked,
  } = pool
  const { t } = useTranslation()
  const [earningsPercentageToDisplay, setEarningsPercentageToDisplay] = useState(0)
  const pairContract = usePairContract(stakingToken.address)
  const cakePriceUsd = usePriceCakeBusd()
  const { autoCompoundFrequency } = getAprData(pool, performanceFee)

  useEffect(() => {
    pairContract.getReserves().then((res) => {
      const { reserve0 } = res
      const staked = totalStaked.dividedBy(DEFAULT_TOKEN_DECIMAL).toNumber()
      const token0Price = new BigNumber(reserve0._hex)
        .div(DEFAULT_TOKEN_DECIMAL)
        .multipliedBy(2)
        .multipliedBy(cakePriceUsd.toNumber())
        .dividedBy(staked)
        .toNumber()
      setEarningsPercentageToDisplay(getPoolApr(token0Price, earningTokenPrice, staked, 1))
      // console.log(token0Price, new BigNumber(reserve0._hex).div(DEFAULT_TOKEN_DECIMAL).toNumber(), cakePriceUsd.toNumber())
    })
  }, [pairContract, cakePriceUsd, totalStaked, setEarningsPercentageToDisplay, earningTokenPrice])

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO

  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : '/swap'

  const [onPresentApyModal] = useModal(
    <RoiCalculatorModal
      earningTokenPrice={earningTokenPrice}
      stakingTokenPrice={stakingTokenPrice}
      stakingTokenBalance={stakedBalance.plus(stakingTokenBalance)}
      apr={apr}
      stakingTokenSymbol={stakingToken.symbol}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      earningTokenSymbol={earningToken.symbol}
      autoCompoundFrequency={autoCompoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  const openRoiModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    <AprLabelContainer alignItems="center" justifyContent="space-between" {...props}>
      {earningsPercentageToDisplay || isFinished ? (
        <>
          <Balance
            onClick={openRoiModal}
            fontSize="16px"
            isDisabled={isFinished}
            value={isFinished ? 0 : earningsPercentageToDisplay}
            decimals={2}
            unit="%"
          />
          {!isFinished && showIcon && (
            <Button onClick={openRoiModal} variant="text" width="20px" height="20px" padding="0px" marginLeft="4px">
              <CalculateIcon color="textSubtle" width="20px" />
            </Button>
          )}
        </>
      ) : (
        <Skeleton width="80px" height="16px" />
      )}
    </AprLabelContainer>
  )
}

export default Apr
