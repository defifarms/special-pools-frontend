import { Button, Flex, Heading, Text } from '@loopstarter/special-uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { usePriceCakeBusd } from 'state/farms/hooks'
import React from 'react'
import { SpecialPoolConfigType } from 'state/types'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface IGroupPools {
  currentSpecialPoolConfig: SpecialPoolConfigType
  poolsSpecial: any
  userDataLoaded: boolean
}

const ActionContainer = styled(Flex)``
const RowPool = styled(Flex)`
  background-color: #2c007c;
  padding: 4px 16px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 16px;
`
const StakeInfo = styled.div`
  background-color: #512e91;
  padding: 8px 24px;
  border-radius: 4px;
  margin-left: 16px;
`
const ButtonStyled = styled(Button)`
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  height: unset;
`
const StakeInfoWrap = styled(Flex)<{ background?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 16px 0 16px 16px;
  border: 1px solid #7b53c4;
  border-radius: 10px;
  background-color: #4a278a;
  padding: 16px;
`

const GroupStakeInfo: React.FC<IGroupPools> = ({ currentSpecialPoolConfig, poolsSpecial, userDataLoaded }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const { account } = useWeb3React()
  const cakePriceBusd = usePriceCakeBusd()
  const cakePriceBusdNumber = cakePriceBusd.toNumber()

  const getTotalLoopsEarns = () => {
    let totalLoopsEarns = 0
    poolsSpecial.forEach((spool) => {
      const defiyEarnsInPool = Number(spool.userData.pendingReward)
      totalLoopsEarns += defiyEarnsInPool
    })
    return new BigNumber(totalLoopsEarns)
  }
  const getTotalLoopsEarnsBUSD = () => {
    let totalLoopsEarns = 0
    poolsSpecial.forEach((spool) => {
      const defiyEarnsInPool = Number(spool.userData.pendingReward) * cakePriceBusdNumber
      totalLoopsEarns += defiyEarnsInPool
    })
    return new BigNumber(totalLoopsEarns)
  }

  return (
    <Flex flexDirection="column" width="100%" mt="0px" flex={2}>
      <StakeInfoWrap flex={1}>
        <Heading>{t('Total LOOPS Earned')}</Heading>
        <Heading color="four">
          {t(
            `${getFullDisplayBalance(getTotalLoopsEarns(), 18, 2)} ~ $${getFullDisplayBalance(
              getTotalLoopsEarnsBUSD(),
              18,
              2,
            )}`,
          )}
        </Heading>
        {poolsSpecial
          .filter((spool) => !spool.isFinished)
          .map((spool) => {
            const stakedBalance = spool?.userData?.stakedBalance
              ? new BigNumber(spool?.userData.stakedBalance)
              : BIG_ZERO
            return stakedBalance.gt(0) ? (
              <Flex mt="16px">
                <Text mr="16px">{`${getFullDisplayBalance(stakedBalance, spool?.stakingToken.decimals, 2)}`}</Text>
                <Text color="four"> {t(`${spool.stakingToken.symbol} Staked`)}</Text>
              </Flex>
            ) : null
          })}
      </StakeInfoWrap>
    </Flex>
  )
}

export default GroupStakeInfo
