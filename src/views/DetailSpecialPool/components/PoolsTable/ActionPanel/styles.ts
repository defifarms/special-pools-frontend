import styled from 'styled-components'

export const ActionContainer = styled.div<{ isAutoVault?: boolean }>`
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 0px;
  flex: 3;

  ${({ theme }) => theme.mediaQueries.sm} {
    // margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    height: ${({ isAutoVault }) => (isAutoVault ? '130px' : 'auto')};
  }
}

  ${({ theme }) => theme.mediaQueries.xl} {
    // margin-left: 8px;
    margin-right: 0;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`
