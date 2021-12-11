import { AddIcon, Button, Flex, IconButton, Text } from '@defifarms/special-uikit'
import { useWeb3React } from '@web3-react/core'
import Container from 'components/Layout/Container'
import { TokenImage } from 'components/TokenImage'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React from 'react'
import {
  usePools,
  useSpecialPools,
  useFetchPublicPoolsData,
  useFetchUserPools,
  useFetchCakeVault,
  useCakeVault
} from 'state/pools/hooks'
import { usePollFarmsPublicData } from 'state/farms/hooks'

import { SpecialPoolConfigType } from 'state/types'
import styled from 'styled-components'
import PoolsTable from 'views/DetailSpecialPool/components/PoolsTable/PoolsTable'


interface IGroupPools {
  currentSpecialPoolConfig: SpecialPoolConfigType
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

const GroupChildrenPools: React.FC<IGroupPools> = ({ currentSpecialPoolConfig }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React() 
  const { account } = useWeb3React()
  const { pools: poolsWithoutAutoVault, userDataLoaded } = useSpecialPools()
  usePollFarmsPublicData()
  useFetchCakeVault()
  useFetchPublicPoolsData()
  useFetchUserPools(account)

  const tableLayout = <PoolsTable pools={poolsWithoutAutoVault.filter(spool => !spool.isFinished)} account={account} userDataLoaded />
  // console.log('poolsWithoutAutoVault', poolsWithoutAutoVault)
  return (
    <Flex flexDirection="column" width="100%" mt="16px" flex={2}>
      {tableLayout}
      {currentSpecialPoolConfig.childrenPools.map((pool) => (
        <RowPool justifyContent="flex-start" alignItems="center" key={pool.sousId}>
          {/* <TokenImage token={pool.stakingToken} size="24px" /> */}
          <TokenImage token={pool.stakingToken} width={40} height={40} />
          <ActionContainer alignItems="center">
            <ButtonStyled scale="sm" minWidth={130} disabled={false} onClick={null} ml="16px" mr="16px">
              {t('Stake')}
            </ButtonStyled>
            <IconButton variant="secondary" onClick={null} disabled={false}>
              <AddIcon color="primary" width="24px" height="24px" />
            </IconButton>
            <StakeInfo>
              <Text>0.00/0.00</Text>
            </StakeInfo>

            {/* <HarvestAction {...farm} userDataReady={userDataReady} />
            <StakedAction {...farm} userDataReady={userDataReady} /> */}
          </ActionContainer>
        </RowPool>
      ))}
    </Flex>
  )
}

export default GroupChildrenPools
