import { MenuEntry, Colors, BoxProps } from '@loopstarter/special-uikit'
import { ContextApi } from 'contexts/Localization/types'

export enum DropdownMenuItemType {
  INTERNAL_LINK,
  EXTERNAL_LINK,
  BUTTON,
  DIVIDER,
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface DropdownMenuItems {
  label?: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: DropdownMenuItemType;
  status?: LinkStatus;
  disabled?: boolean;
  iconName?: string;
  isMobileOnly?: boolean;
}

export type MenuItemsType = {
  label: string;
  href?: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const url = process.env.REACT_APP_HOST_1
const specialUrl = process.env.REACT_APP_HOST_2

const chainId = process.env.REACT_APP_CHAIN_ID

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => {
  const configMenu = [
    {
      label: t('Trade'),
      icon: 'TradeIcon',
      initialOpenState: true,
      items: [
        {
          label: t('Exchange'),
          href: `/swap`,
        },
        {
          label: t('Liquidity'),
          href: `/liquidity`,
        },
      ],
    },
    {
      label: t('Farms'),
      icon: 'FarmIcon',
      href: `/farms`,
    },
    {
      label: t('Pools'),
      icon: 'PoolIcon',
      items: [
        {
          label: t('Classic Pools'),
          href: `/pools`,
        },
        {
          label: t('Special Pools'),
          href: `/spool`,
        },
      ],
    }
  ]
  if (chainId === '97') {
    return [
      {
        label: t('Trade'),
        icon: 'TradeIcon',
        initialOpenState: true,
        items: [
          {
            label: t('Exchange'),
            href: `/swap`,
          },
          {
            label: t('Liquidity'),
            href: `/liquidity`,
          },
        ],
      },
      {
        label: t('Farms'),
        icon: 'FarmIcon',
        href: `/farms`,
      },
      {
        label: t('Pools'),
        icon: 'PoolIcon',
        items: [
          {
            label: t('Classic Pools'),
            href: `/pools`,
          },
          {
            label: t('Special Pools'),
            href: `/spool`,
          },
        ],
      }, {
        label: t('Claim BNB'),
        icon: 'NftIcon',
        href: `https://testnet.binance.org/faucet-smart`,
        target: "_blank"
      }
    ]
  }
  return configMenu
}



export default config
