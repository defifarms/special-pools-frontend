import React, { useMemo } from 'react'
import { Flex, Skeleton, Text } from '@defifarms/special-uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { DeserializedPool } from 'state/types'
import { useCakeVault } from 'state/pools/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface TotalStakedCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const TotalStakedCell: React.FC<TotalStakedCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { sousId, stakingToken, totalStaked, isAutoVault } = pool
  const { totalCakeInVault } = useCakeVault()

  const isManualCakePool = sousId === 0

  const totalStakedBalance = useMemo(() => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }, [isAutoVault, totalCakeInVault, isManualCakePool, totalStaked, stakingToken.decimals])

  return (
    <StyledCell role="cell">
      <CellContent>
        {totalStaked && totalStaked.gte(0) ? (
          <Flex height="20px" alignItems="center">
            {/* <Balance fontSize="16px" value={totalStakedBalance} decimals={0} unit={` ${stakingToken.symbol}`} /> */}
            <Text>{`Total staked ${totalStakedBalance.toFixed(2)}/${5000} ${stakingToken.symbol}`}</Text>
          </Flex>
        ) : (
          <Skeleton width="80px" height="16px" />
        )}
      </CellContent>
    </StyledCell>
  )
}

export default TotalStakedCell
