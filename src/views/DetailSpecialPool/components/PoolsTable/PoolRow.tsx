import { Flex, Text, useMatchBreakpoints } from '@defifarms/special-uikit'
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
  min-width: 40px;
  width: 20%;
  max-width: 60px;
  justify-content: center;
  align-items: center;
`
const StakeInfo = styled.div`
  padding: 8px 8px;
`
const StakeInfoInner = styled.div`
  background-color: #512e91;
  padding: 8px 8px;
  border-radius: 4px;
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

  return (
    <>
      <StyledRow role="row" flexWrap={isLargerScreen ? 'nowrap' : 'wrap'}>
        <TokenImageWrap>
          <TokenImage token={pool.stakingToken} width={40} height={40} />
        </TokenImageWrap>
        <Harvest {...pool} userDataLoaded={userDataLoaded} />
        <Stake pool={pool} userDataLoaded={userDataLoaded} />
        <StakeInfo>
          <StakeInfoInner>
            <Text color='four'>{t('Your staked')}</Text>
            <Text>{`${getFullDisplayBalance(stakedBalance, stakingToken.decimals, 2)}/${getFullDisplayBalance(
              stakingLimit,
              stakingToken.decimals,
              0,
            )} ${stakingToken.name}`}</Text>
          </StakeInfoInner>
        </StakeInfo>
        <StakeInfo>
          <StakeInfoInner>
            <TotalStakedCell pool={pool} />
          </StakeInfoInner>
        </StakeInfo>
      </StyledRow>
    </>
  )
}

export default PoolRow
