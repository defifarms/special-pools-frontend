import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: true,
  },
  /**
   * SpecialPools start from 500
   */
  {
    sousId: 500,
    stakingToken: serializedTokens.defiynew,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0x4C15c57071EBCC4318F1C427878491d51262A854',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 501,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0xf1C20692a886cD9f8fD77eD6b779b482102f3916',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 502,
    stakingToken: serializedTokens.wbnb,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0x4362013C43Ee076aC73bf1CF14533B1b52695f96',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 503,
    stakingToken: serializedTokens.btcb,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0x6f2744f028e111fdDDd5F01d78C00F7b8FEF44D4',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 504,
    stakingToken: serializedTokens.eth,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0x6c134C5D35EE70A7617E71B7a2707ebe71EB3096',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 505,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.defiynew,
    contractAddress: {
      97: '0xc7109B8499ea12643aF743684Cdc299cEaa2e162',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
]

export default pools
