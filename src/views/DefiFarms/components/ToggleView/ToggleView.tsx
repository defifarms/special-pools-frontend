import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton } from '@loopstarter/special-uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-right: 0px;
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
    margin-right: 16px;
  }
`
const WrapIcon = styled.div`
  display: inline-block;
  background-color: #6e2de5;
  margin: 4px;
  border-radius: 1px;
  & > button {
    width: 28px;
    height: 27px;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <WrapIcon>
        <IconButton variant="text" scale="sm" id="clickFarmTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
          <ListViewIcon width={24} height={24} color={viewMode === ViewMode.TABLE ? 'cyan' : 'textDisabled'} />
        </IconButton>
      </WrapIcon>
      <WrapIcon>
        <IconButton variant="text" scale="sm" id="clickFarmCardView" onClick={() => handleToggle(ViewMode.CARD)}>
          <CardViewIcon width={24} height={24} color={viewMode === ViewMode.CARD ? 'cyan' : 'textDisabled'} />
        </IconButton>
      </WrapIcon>
    </Container>
  )
}

export default ToggleView
