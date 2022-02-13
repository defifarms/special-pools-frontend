import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LoopStarter',
  description:
    'Evolution of DAO',
  image: 'https://app.defifarms.org/images/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LoopStarter')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('LoopStarter')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('LoopStarter')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('LoopStarter')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('LoopStarter')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('LoopStarter')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LoopStarter')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LoopStarter')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('LoopStarter')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LoopStarter')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('LoopStarter')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LoopStarter')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Coming Soon')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LoopStarter')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LoopStarter')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('LoopStarter')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('LoopStarter')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('LoopStarter')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('LoopStarter Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('LoopStarter Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('LoopStarter Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('LoopStarter')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('LoopStarter')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('LoopStarter')}`,
      }
    case '/rocket':
      return {
        title: `${t('Rocket')} | ${t('Coming Soon')}`,
      }
    case '/nft':
      return {
        title: `${t('NFT')} | ${t('Coming Soon')}`,
      }
    default:
      return null
  }
}
