import tokens, { serializeTokens } from './tokens'

import { PoolCategory } from './types'
import { SpecialPoolConfigType } from '../../state/types'

const serializedTokens = serializeTokens()
export const SpecialPoolsConfig: SpecialPoolConfigType[] = [
  {
    name: 'LoopStarter 30K',
    link: 'round-1',
    description: " | Lock-up tern 10 days",
    capGoal: 30000,
    timeStart: 1641282721695, // 1641222721695
    timeStartNote: 'November 5th 2021',
    childrenPools: [
      {
        sousId: 500,
        stakingToken: serializedTokens.defiy,
        earningToken: serializedTokens.defiy,
        contractAddress: {
          97: '0x7458c463a6a257Ae3541B361D1260ae357F9E5A5',
          56: '',
        },
        poolCategory: PoolCategory.SPECIAL,
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.0578',
      },
      // {
      //   sousId: 501,
      //   stakingToken: serializedTokens.usdt,
      //   earningToken: serializedTokens.defiy,
      //   contractAddress: {
      //     97: '0xf1C20692a886cD9f8fD77eD6b779b482102f3916',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.SPECIAL,
      //   harvest: true,
      //   sortOrder: 999,
      //   tokenPerBlock: '0.0578',
      // },
      // {
      //   sousId: 502,
      //   stakingToken: serializedTokens.wbnb,
      //   earningToken: serializedTokens.defiy,
      //   contractAddress: {
      //     97: '0x4362013C43Ee076aC73bf1CF14533B1b52695f96',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.SPECIAL,
      //   harvest: true,
      //   sortOrder: 999,
      //   tokenPerBlock: '0.0578',
      // },
      // {
      //   sousId: 503,
      //   stakingToken: serializedTokens.btcb,
      //   earningToken: serializedTokens.defiy,
      //   contractAddress: {
      //     97: '0x6f2744f028e111fdDDd5F01d78C00F7b8FEF44D4',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.SPECIAL,
      //   harvest: true,
      //   sortOrder: 999,
      //   tokenPerBlock: '0.0578',
      // },
      // {
      //   sousId: 504,
      //   stakingToken: serializedTokens.eth,
      //   earningToken: serializedTokens.defiy,
      //   contractAddress: {
      //     97: '0x6c134C5D35EE70A7617E71B7a2707ebe71EB3096',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.SPECIAL,
      //   harvest: true,
      //   sortOrder: 999,
      //   tokenPerBlock: '0.0578',
      // },
      // {
      //   sousId: 505,
      //   stakingToken: serializedTokens.cake,
      //   earningToken: serializedTokens.defiy,
      //   contractAddress: {
      //     97: '0xc7109B8499ea12643aF743684Cdc299cEaa2e162',
      //     56: '',
      //   },
      //   poolCategory: PoolCategory.SPECIAL,
      //   harvest: true,
      //   sortOrder: 999,
      //   tokenPerBlock: '0.0578',
      // },
    ],
  },
  {
    name: 'LoopStarter 50K',
    link: 'round-2',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 50000,
    childrenPools: [],
  },
  {
    name: 'LoopStarter 100K',
    link: 'round-3',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 100000,
    childrenPools: [],
  },
  {
    name: 'LoopStarter 500K',
    link: 'round-4',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 500000,
    childrenPools: [],
  },
  {
    name: 'LoopStarter 1500K',
    capGoal: 1500000,
    link: 'round-5',
    description: "APR 700% | Lock-up tern 10 days",
    childrenPools: [],
  },
]
