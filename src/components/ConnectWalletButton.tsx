import React from 'react'
import { Button, useWalletModal } from '@defifarms/special-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const StyledButtonMenu = styled(Button)`
  // width: 132px;
  height: 35px;
  border-radius: 75px;
  background: #3230b2;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  // width: 188.66px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    height: 50px;
    border-radius: 75px;
    font-size: 18px;
  }
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <StyledButtonMenu variant="four" onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </StyledButtonMenu>
  )
}

export default ConnectWalletButton
