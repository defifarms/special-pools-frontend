import { Flex } from '@loopstarter/special-uikit'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { SpecialPoolConfigType } from 'state/types'
import PoolsTable from 'views/DetailSpecialPool/components/PoolsTable/PoolsTable'

interface IGroupPools {
  currentSpecialPoolConfig?: SpecialPoolConfigType
  poolsSpecial: any
  userDataLoaded: boolean
}

const GroupChildrenPools: React.FC<IGroupPools> = ({
  poolsSpecial,
  userDataLoaded,
}) => {
  const { account } = useWeb3React()

  const tableLayout = (
    <PoolsTable
      pools={poolsSpecial}
      account={account}
      userDataLoaded={userDataLoaded}
    />
  )
  return (
    <Flex flexDirection="column" width="100%" mt="16px" flex={5}>
      {tableLayout}
    </Flex>
  )
}

export default GroupChildrenPools
