import {
  Flex,
  LogoutIcon, useMatchBreakpoints, useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  Button
} from '@loopstarter/special-uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import useAuth from 'hooks/useAuth'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import React from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useProfile } from 'state/profile/hooks'
import styled from 'styled-components'
import WalletModal, { LOW_BNB_BALANCE, WalletView } from './WalletModal'
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
  display: flex;
`
const ChainInfo = styled(Button)`
  white-space: nowrap;
  border-radius: 50px;
  height: 50px;
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
  const { chainId } = useActiveWeb3React()

  if (!account) {
    return (
      <Wrapper>
        <MenuWrapper>
          <ConnectWalletButton scale="sm" />
        </MenuWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {/* {!isMobile && <Image alt="alt" src="/images/header.png" />} */}

      <MenuWrapper>
        {!isMobile && <ChainInfo>{t(chainId === 56 ? 'BSC Mainnet' : 'BSC Testnet')}</ChainInfo>}
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
