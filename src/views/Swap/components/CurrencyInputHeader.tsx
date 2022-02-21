import React from 'react'
import styled from 'styled-components'
import { ChartIcon, Flex, Heading, HistoryIcon, IconButton, NotificationDot, Text, useModal } from '@loopstarter/special-uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  align-items: center;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: #3F09A2;
`

const SubTitle = styled(Text)`
  font-family: HK Grotesk;
`

const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle, setIsChartDisplayed }) => {
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="end" justifyContent="space-between">
        <Flex flexDirection="column" >
          <Heading as="h2">
            {title}
          </Heading>
          <Flex alignItems="center">
            <SubTitle color="text" fontSize="14px">
              {subtitle}
            </SubTitle>
          </Flex>
        </Flex>
        {setIsChartDisplayed && (
          <IconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
            <ChartIcon width="24px" color="#79D6F4" />
          </IconButton>
        )}
        <Flex>
          <NotificationDot show={expertMode}>
            <GlobalSettings color="primary" mr="0" />
          </NotificationDot>
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="#fff" width="24px" />
          </IconButton>
        </Flex>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
