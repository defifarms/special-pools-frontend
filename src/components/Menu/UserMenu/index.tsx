import React from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  Flex,
  LogoutIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  useMatchBreakpoints
} from '@defifarms/special-uikit'
import history from 'routerHistory'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'
import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import WalletModal, { WalletView, LOW_BNB_BALANCE } from './WalletModal'
import ProfileUserMenuItem from './ProfileUserMenutItem'
import WalletUserMenuItem from './WalletUserMenuItem'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 0;
`

const Image = styled.img`
  padding-top: 15px;
  height: 120px;
  width: calc(100vw - 243px);
`

const MenuWrapper = styled.div`
  position: absolute;
  right: 16px;
`

const UserMenu = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const { balance, fetchStatus } = useGetBnbBalance()
  const { isInitialized, isLoading, profile } = useProfile()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  const hasProfile = isInitialized && !!profile
  const avatarSrc = profile?.nft?.image?.thumbnail
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)
  const { isMobile } = useMatchBreakpoints()

  if (!account) {
    return <Wrapper>{!isMobile && <Image alt="alt" src="/images/header.png" />}<MenuWrapper><ConnectWalletButton scale="sm" /></MenuWrapper></Wrapper>
  }

  return (
    <Wrapper>
    {!isMobile && <Image alt="alt" src="/images/header.png" />}
    <MenuWrapper>
    <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
      <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
      <UserMenuItem as="button" onClick={onPresentTransactionModal}>
        {t('Transactions')}
      </UserMenuItem>
      {/* <UserMenuDivider />
      <UserMenuItem as="button" onClick={() => history.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}`)}>
        {t('Your NFTs')}
      </UserMenuItem>
      <ProfileUserMenuItem isLoading={isLoading} hasProfile={hasProfile} /> */}
      <UserMenuDivider />
      <UserMenuItem as="button" onClick={logout}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          {t('Disconnect')}
          <LogoutIcon />
        </Flex>
      </UserMenuItem>
    </UIKitUserMenu>
    </MenuWrapper>
    </Wrapper>
  )
}

export default UserMenu
