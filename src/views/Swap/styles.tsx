import { Box, Flex } from '@loopstarter/special-uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 40px' : 'padding: 0 40px')};

  ${({ theme }) => theme.mediaQueries.xxl} {
    ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 120px' : 'padding: 0 40px')};
  }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width: 330px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 370px;
  }
`
