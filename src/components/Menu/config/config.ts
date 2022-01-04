import { MenuEntry, Colors, BoxProps } from '@defifarms/special-uikit'
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

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: `/`,
  },
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
  },
  {
    label: t('Rocket'),
    icon: 'RocketIcon',
    href: `/rocket`,
    status: {
      text: "SOON",
      color: "warning",
    }
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: `/nft`,
    status: {
      text: "SOON",
      color: "warning",
    }
  },
  {
    label: t('Lottery'),
    icon: 'LotteryIcon',
    href: `/lottery`,
    status: {
      text: "SOON",
      color: "warning",
    }
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.defifarms.org/contact-us',
        target:"_blank"
      },
      {
        label: t('Docs'),
        href: 'https://docs.defifarms.org/',
        target:"_blank"
      },
      {
        label: 'Github',
        href: 'https://github.com/defifarms',
        target:"_blank"
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@DefiFarmsNFTs',
        target:"_blank"
      },
      {
        label: 'Audited by',
        href: 'https://callisto.network/defifarms-protocol-security-audit/',
        target:"_blank"
      },
    ],
  },
]

export default config
