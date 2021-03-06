import { Flex, Text, useMatchBreakpoints, useTooltip } from '@loopstarter/special-uikit'
import BigNumber from 'bignumber.js'
import { TokenImage } from 'components/TokenImage'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { DeserializedPool } from 'state/types'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import Harvest from './ActionPanel/Harvest'
import Stake from './ActionPanel/Stake'
import TotalStakedCell from './Cells/TotalStakedCell'
import Apr from './Apr'

interface PoolRowProps {
  pool: DeserializedPool
  account: string
  userDataLoaded: boolean
}

const StyledRow = styled(Flex)`
  background-color: transparent;
  display: flex;
  cursor: pointer;
`
const TokenImageWrap = styled.div`
  background-color: transparent;
  display: flex;
  flex: 1;
  min-width: 50px;
  width: 20%;
  max-width: 70px;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
`
const StakeInfo = styled.div`
  padding: 8px 8px;
  flex: 4;
  width: 100%;

`
const StakeInfoLast = styled(StakeInfo)`
  flex: 6;
`
const StakeInfoInner = styled.div`
  background-color: #512e91;
  padding: 8px 8px;
  border-radius: 4px;
  height: 48px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {
  const {
    sousId,
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    contractAddress,
    userData,
    isAutoVault,
  } = pool

  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl
  const { t } = useTranslation()

  // --------
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO

  const maxStakeRow = stakingLimit.gt(0) ? (
    <Flex mb="8px" justifyContent="space-between">
      <Text>{t('Max. stake per user')}:</Text>
      <Text>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
    </Flex>
  ) : null
 
    const { targetRef, tooltip, tooltipVisible } = useTooltip(pool.poolNote ? t(pool.poolNote) : '', {
      placement: 'top',
      tooltipOffset: [20, 10],
    })

  return (
    <>
      {tooltipVisible && tooltip}
      <StyledRow ref={targetRef} role="row" alignItems="center" flexWrap={isLargerScreen ? 'nowrap' : 'wrap'}>
        <TokenImageWrap>
          <TokenImage token={pool.stakingToken} width={40} height={40} />
        </TokenImageWrap>
        <Harvest {...pool} userDataLoaded={userDataLoaded} />
        <Stake pool={pool} userDataLoaded={userDataLoaded} />
        <StakeInfo>
          <StakeInfoInner>
            {/* <Text color='four'>{t('Your staked')}</Text> */}
            <Text fontWeight={600} fontSize="18px">{`${getFullDisplayBalance(
              stakedBalance,
              stakingToken.decimals,
              2,
            )}/${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)}`}</Text>
          </StakeInfoInner>
        </StakeInfo>
        <StakeInfoLast>
          <StakeInfoInner>
            <TotalStakedCell pool={pool} />
          </StakeInfoInner>
        </StakeInfoLast>
      </StyledRow>
    </>
  )
}

export default PoolRow
