import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DefiFarms',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by DefiFarms), NFTs, and more, on a platform you can trust.',
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
        title: `${t('Home')} | ${t('DefiFarms')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('DefiFarms')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('DefiFarms')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('DefiFarms')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('DefiFarms')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('DefiFarms')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DefiFarms')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DefiFarms')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('DefiFarms')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DefiFarms')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('DefiFarms')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DefiFarms')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Coming Soon')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DefiFarms')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DefiFarms')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('DefiFarms')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('DefiFarms')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('DefiFarms')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('DefiFarms Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('DefiFarms Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('DefiFarms Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('DefiFarms')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('DefiFarms')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('DefiFarms')}`,
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
