import { MenuEntry, Colors, BoxProps } from '@defifarms/special-uikit'
import { ContextApi } from 'contexts/Localization/types'

const url = process.env.REACT_APP_HOST_1
const specialUrl = process.env.REACT_APP_HOST_2

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

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: `${url}/`,
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Exchange'),
        href: `${url}/swap`,
      },
      {
        label: t('Liquidity'),
        href: `${url}/liquidity`,
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: `${url}/farms`,
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    items: [
      {
        label: t('Classic Pools'),
        href: `${url}/pools`,
      },
      {
        label: t('Special Pools'),
        href: `${specialUrl}/spools`,
      },
    ],
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
