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
  {
    sousId: 2,
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
    sousId: 3,
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
  }
]

export default pools
