import tokens, { serializeTokens } from './tokens'

import { PoolCategory } from './types'
import { SpecialPoolConfigType } from '../../state/types'

const serializedTokens = serializeTokens()
export const SpecialPoolsConfig: SpecialPoolConfigType[] = [
  {
    name: 'DeFiFarms 30K',
    link: 'round-1',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 30000,
    childrenPools: [
      {
        sousId: 2,
        stakingToken: serializedTokens.defiy,
        earningToken: serializedTokens.defiy,
        contractAddress: {
          97: '0x417d2fe6cf2208036233eb07cae183d6aa623672',
          56: '',
        },
        poolCategory: PoolCategory.CORE,
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.0578',
      }
      // {
      //   sousId: 3,
      //   apr: 100,
      //   stakingToken: tokens.busd,
      //   earningToken: tokens.defiy,
      //   contractAddress: {
      //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.CORE,
      //   depositFeeBP: '0',
      //   harvestInterval: '14400',
      //   tokenPerBlock: '0.01',
      //   sortOrder: 1,
      //   isFinished: false,
      // },
      // {
      //   sousId: 3,
      //   apr: 100,
      //   stakingToken: tokens.wbnb,
      //   earningToken: tokens.defiy,
      //   contractAddress: {
      //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.CORE,
      //   depositFeeBP: '0',
      //   harvestInterval: '14400',
      //   tokenPerBlock: '0.01',
      //   sortOrder: 1,
      //   isFinished: false,
      // },
      // {
      //   sousId: 3,
      //   apr: 100,
      //   stakingToken: tokens.btcb,
      //   earningToken: tokens.defiy,
      //   contractAddress: {
      //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.CORE,
      //   depositFeeBP: '0',
      //   harvestInterval: '14400',
      //   tokenPerBlock: '0.01',
      //   sortOrder: 1,
      //   isFinished: false,
      // },
      // {
      //   sousId: 3,
      //   apr: 100,
      //   stakingToken: tokens.eth,
      //   earningToken: tokens.defiy,
      //   contractAddress: {
      //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.CORE,
      //   depositFeeBP: '0',
      //   harvestInterval: '14400',
      //   tokenPerBlock: '0.01',
      //   sortOrder: 1,
      //   isFinished: false,
      // },
      // {
      //   sousId: 3,
      //   apr: 100,
      //   stakingToken: tokens.cake,
      //   earningToken: tokens.defiy,
      //   contractAddress: {
      //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.CORE,
      //   depositFeeBP: '0',
      //   harvestInterval: '14400',
      //   tokenPerBlock: '0.01',
      //   sortOrder: 1,
      //   isFinished: false,
      // },
    ],
  },
  {
    name: 'DeFiFarms 50K',
    link: 'round-2',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 50000,
    childrenPools: [
      {
        sousId: 3,
        stakingToken: tokens.busd,
        earningToken: tokens.defiy,
        contractAddress: {
          97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
          56: '',
        },
        poolCategory: PoolCategory.CORE,
        depositFeeBP: '0',
        harvestInterval: '14400',
        tokenPerBlock: '0.01',
        sortOrder: 1,
        isFinished: false,
      },
    ],
  },
  {
    name: 'DeFiFarms 100K',
    link: 'round-3',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 100000,
    childrenPools: [
      {
        sousId: 3,
        stakingToken: tokens.busd,
        earningToken: tokens.defiy,
        contractAddress: {
          97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
          56: '',
        },
        poolCategory: PoolCategory.CORE,
        depositFeeBP: '0',
        harvestInterval: '14400',
        tokenPerBlock: '0.01',
        sortOrder: 1,
        isFinished: false,
      },
    ],
  },
  {
    name: 'DeFiFarms 500K',
    link: 'round-4',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 500000,
    childrenPools: [
      {
        sousId: 3,
        stakingToken: tokens.busd,
        earningToken: tokens.defiy,
        contractAddress: {
          97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
          56: '',
        },
        poolCategory: PoolCategory.CORE,
        depositFeeBP: '0',
        harvestInterval: '14400',
        tokenPerBlock: '0.01',
        sortOrder: 1,
        isFinished: false,
      },
    ],
  },
  {
    name: 'DeFiFarms 1500K',
    capGoal: 150000,
    link: 'round-5',
    description: "APR 700% | Lock-up tern 10 days",
    childrenPools: [
      {
        sousId: 3,
        stakingToken: tokens.busd,
        earningToken: tokens.defiy,
        contractAddress: {
          97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
          56: '',
        },
        poolCategory: PoolCategory.CORE,
        depositFeeBP: '0',
        harvestInterval: '14400',
        tokenPerBlock: '0.01',
        sortOrder: 1,
        isFinished: false,
      },
    ],
  },
]
