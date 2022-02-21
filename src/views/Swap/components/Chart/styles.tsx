import { Box } from '@loopstarter/special-uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{ $isDark: boolean; $isExpanded: boolean }>`
  border: none;
  border-radius: 32px;
  width: 100%;
  height: 70%;
  padding-top: 36px;
  background: #2C007C;
  opacity: 0.8;
  backdrop-filter: blur(200px);
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    width: ${({ $isExpanded }) => ($isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '484px')};
  }
`
