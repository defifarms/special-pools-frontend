import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@loopstarter/special-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledButtonMenu = styled(Button)`
  font-weight: 600;
  font-size: 21px;
  line-height: 52px;
  height: 52px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 80px;
    font-size: 32.9627px;
  }
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <StyledButtonMenu onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </StyledButtonMenu>
  )
}

export default UnlockButton
