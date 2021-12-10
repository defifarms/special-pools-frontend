import { Box, Button, Card, Flex, Heading, Slider, Text, AddIcon, IconButton } from '@defifarms/special-uikit'
import Container from 'components/Layout/Container'
import { MainBackground } from 'components/Layout/MainBackground'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Currency, Token } from '@defifarms/sdk'
import { RouteComponentProps } from 'react-router'
import { SpecialPoolConfigType } from 'state/types'
import styled from 'styled-components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

import { CurrencyLogo } from 'components/Logo'
import { TokenImage } from 'components/TokenImage'
import { wrappedCurrency } from 'utils/wrappedCurrency'

import { SpecialPoolsConfig } from '../../../SpecialPools/config'

interface IGroupPools {
  currentSpecialPoolConfig: SpecialPoolConfigType
}

const CardSpecialPoolBody = styled.div`
  background: #2c007c80;
  padding: 16px;
  backdrop-filter: blur(5px);
`
const ContainerWrap = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
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

  return (
    <Flex flexDirection="column" width="100%" mt="16px" flex={2}>
      {currentSpecialPoolConfig.childrenPools.map((pool) => (
        <RowPool justifyContent="flex-start" alignItems="center">
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
