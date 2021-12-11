import React, { useState } from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@defifarms/special-uikit'
import { DeserializedPool } from 'state/types'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import NameCell from './Cells/NameCell'
import EarningsCell from './Cells/EarningsCell'
import AprCell from './Cells/AprCell'
import TotalStakedCell from './Cells/TotalStakedCell'
import EndsInCell from './Cells/EndsInCell'
import ExpandActionCell from './Cells/ExpandActionCell'
import ActionPanel from './ActionPanel/ActionPanel'
import AutoEarningsCell from './Cells/AutoEarningsCell'
import AutoAprCell from './Cells/AutoAprCell'

interface PoolRowProps {
  pool: DeserializedPool
  account: string
  userDataLoaded: boolean
}

const StyledRow = styled.div`
  background-color: transparent;
  display: flex;
  cursor: pointer;
`
const StakeInfo = styled.div`
  background-color: #512e91;
  padding: 8px 24px;
  border-radius: 4px;
  margin-left: 16px;
`

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl
  const [expanded, setExpanded] = useState(true)
  const shouldRenderActionPanel = useDelayedUnmount(expanded, 300)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <StyledRow role="row" onClick={toggleExpanded}>
        <NameCell pool={pool} />
        {/* {pool.isAutoVault ? (
          <AutoEarningsCell pool={pool} account={account} userDataLoaded={userDataLoaded} />
        ) : (
          <EarningsCell pool={pool} account={account} userDataLoaded={userDataLoaded} />
        )} */}
        {/* {pool.isAutoVault ? <AutoAprCell pool={pool} /> : <AprCell pool={pool} />} */}

        {isLargerScreen && (
          <StakeInfo>
            <TotalStakedCell pool={pool} />
          </StakeInfo>
        )}
        {/* {isDesktop && <EndsInCell pool={pool} />} */}
        {/* <ExpandActionCell expanded={expanded} isFullLayout={isTablet || isDesktop} /> */}
      </StyledRow>
      {shouldRenderActionPanel && (
        <ActionPanel
          account={account}
          pool={pool}
          userDataLoaded={userDataLoaded}
          expanded={expanded}
          breakpoints={{ isXs, isSm, isMd, isLg, isXl, isXxl }}
        />
      )}
    </>
  )
}

export default PoolRow
