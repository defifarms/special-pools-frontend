import { Button, Flex, Heading, Text } from '@defifarms/special-uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
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

  const getTotalDefiyEarns = () => {
        let totalDefiyEarns = 0
        poolsSpecial.forEach(spool => {
            const defiyEarnsInPool = Number(spool.userData.pendingReward)
            totalDefiyEarns += defiyEarnsInPool
        });
        return new BigNumber(totalDefiyEarns)
  }

  return (
    <Flex flexDirection="column" width="100%" mt="0px" flex={2}>
      <StakeInfoWrap flex={1}>
        <Heading>{t('Total DEFIY Earned')}</Heading>
        <Heading color="four">{t(`${getFullDisplayBalance(getTotalDefiyEarns(), 18, 3)} ~ $0.00`)}</Heading>
        {poolsSpecial
          .filter((spool) => !spool.isFinished)
          .map((spool) => {
            const stakedBalance = spool?.userData?.stakedBalance
              ? new BigNumber(spool?.userData.stakedBalance)
              : BIG_ZERO
            return (
              <Flex mt="16px">
                <Text mr="16px">{`${getFullDisplayBalance(stakedBalance, spool?.stakingToken.decimals, 3)}`}</Text>
                <Text color="four"> {t(`${spool.earningToken.name} Staked`)}</Text>
              </Flex>
            )
          })}
        {/* 
        <Flex mt="16px">
          <Text mr="16px">0.00</Text>
          <Text color="four"> {t('BUSD Staked')}</Text>
        </Flex>
        <Flex mt="16px">
          <Text mr="16px">0.00</Text>
          <Text color="four"> {t('WBNB Staked')}</Text>
        </Flex>
        <Flex mt="16px">
          <Text mr="16px">0.00</Text>
          <Text color="four"> {t('BTCB Staked')}</Text>
        </Flex>
        <Flex mt="16px">
          <Text mr="16px">0.00</Text>
          <Text color="four"> {t('WETH Staked')}</Text>
        </Flex>
        <Flex mt="16px">
          <Text mr="16px">0.00</Text>
          <Text color="four"> {t('CAKE Staked')}</Text>
        </Flex> */}
      </StakeInfoWrap>
    </Flex>
  )
}

export default GroupStakeInfo
