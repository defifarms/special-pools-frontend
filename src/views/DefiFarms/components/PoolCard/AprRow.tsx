import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { Flex, TooltipText, IconButton, useModal, CalculateIcon, Skeleton, useTooltip } from '@defifarms/special-uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import RoiCalculatorModal from 'components/RoiCalculatorModal'
import { DeserializedPool } from 'state/types'
import { getAprData } from 'views/Pools/helpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { usePairContract } from 'hooks/useContract'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getPoolApr } from 'utils/apr'

const ApyLabelContainer = styled(Flex)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

interface AprRowProps {
  pool: DeserializedPool
  stakedBalance: BigNumber
  performanceFee?: number
}

const AprRow: React.FC<AprRowProps> = ({ pool, stakedBalance, performanceFee = 0 }) => {
  const { t } = useTranslation()
  const [earningsPercentageToDisplay, setEarningsPercentageToDisplay] = useState(0)
  const { stakingToken, earningToken, isFinished, apr, earningTokenPrice, stakingTokenPrice, userData, isAutoVault, totalStaked } =
    pool
  const pairContract = usePairContract(stakingToken.address)

  const cakePriceUsd = usePriceCakeBusd()
  
  useEffect(() => {
    pairContract.getReserves().then(res => {
      const { reserve0 } = res
      const staked = totalStaked.dividedBy(DEFAULT_TOKEN_DECIMAL).toNumber()
      const token0Price = new BigNumber(reserve0._hex).div(DEFAULT_TOKEN_DECIMAL).multipliedBy(2).multipliedBy(cakePriceUsd.toNumber()).dividedBy(staked).toNumber()
      setEarningsPercentageToDisplay(getPoolApr(token0Price, earningTokenPrice, staked, 1))
      console.log(token0Price, new BigNumber(reserve0._hex).div(DEFAULT_TOKEN_DECIMAL).toNumber(), cakePriceUsd.toNumber()) 
    })
  }, [pairContract, cakePriceUsd, totalStaked, setEarningsPercentageToDisplay, earningTokenPrice])
  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO

  const tooltipContent = isAutoVault
    ? t('APY includes compounding, APR doesn’t. This pool’s DEFIY is compounded automatically, so we show APY.')
    : t('This pool’s rewards aren’t compounded automatically, so we show APR')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  const { autoCompoundFrequency } = getAprData(pool, performanceFee)

  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : '/swap'

  const [onPresentApyModal] = useModal(
    <RoiCalculatorModal
      earningTokenPrice={earningTokenPrice}
      stakingTokenPrice={stakingTokenPrice}
      apr={apr}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      stakingTokenBalance={stakedBalance.plus(stakingTokenBalance)}
      stakingTokenSymbol={stakingToken.symbol}
      earningTokenSymbol={earningToken.symbol}
      autoCompoundFrequency={autoCompoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef}>{isAutoVault ? `${t('APY')}:` : `${t('APR')}:`}</TooltipText>
      {earningsPercentageToDisplay || isFinished ? (
        <ApyLabelContainer alignItems="center" onClick={onPresentApyModal}>
          <Balance
            fontSize="16px"
            isDisabled={isFinished}
            value={isFinished ? 0 : earningsPercentageToDisplay}
            decimals={2}
            unit="%"
            onClick={onPresentApyModal}
          />
          {!isFinished && (
            <IconButton variant="text" scale="sm">
              <CalculateIcon color="textSubtle" width="18px" />
            </IconButton>
          )}
        </ApyLabelContainer>
      ) : (
        <Skeleton width="82px" height="32px" />
      )}
    </Flex>
  )
}

export default AprRow
