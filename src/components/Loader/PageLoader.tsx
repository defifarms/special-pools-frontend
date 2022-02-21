import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@loopstarter/special-uikit'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SpinnerWrap = styled(Spinner)`
  top: 36px;
  left: 28px;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <SpinnerWrap />
    </Wrapper>
  )
}

export default PageLoader
