import React from 'react'
import styled from 'styled-components'
import { Card } from '@loopstarter/special-uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 10px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
  background: #2C007C;
  backdrop-filter: blur(177.573px);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
