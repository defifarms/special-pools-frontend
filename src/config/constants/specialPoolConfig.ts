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
    childrenPoolConfigs: [
      {
        sousId: 500,
        allocateInMasterPool: 0.6
      },
      {
        sousId: 501,
        allocateInMasterPool: 0.08
      },
      {
        sousId: 502,
        allocateInMasterPool: 0.08
      },
      {
        sousId: 503,
        allocateInMasterPool: 0.08
      },
      {
        sousId: 504,
        allocateInMasterPool: 0.08
      },
      {
        sousId: 505,
        allocateInMasterPool: 0.08
      },
    ],
  },
  {
    name: 'LoopStarter 50K',
    link: 'round-2',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 50000,
    childrenPoolConfigs: [],
  },
  {
    name: 'LoopStarter 100K',
    link: 'round-3',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 100000,
    childrenPoolConfigs: [],
  },
  {
    name: 'LoopStarter 500K',
    link: 'round-4',
    description: "APR 700% | Lock-up tern 10 days",
    capGoal: 500000,
    childrenPoolConfigs: [],
  },
  {
    name: 'LoopStarter 1500K',
    capGoal: 1500000,
    link: 'round-5',
    description: "APR 700% | Lock-up tern 10 days",
    childrenPoolConfigs: [],
  },
]
