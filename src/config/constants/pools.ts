import tokens, { serializeTokens } from './tokens'
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
    sousId: 1,
    stakingToken: serializedTokens.loops,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x09c5e8977F6d5581e7EeA60Bd83B22bD62A03960',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    harvest: true,
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.lpLoopsBnb,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x6D9f1bC1ce26848Fc1c47F1bfF3Be5Bb12c95dE6',
      56: '',
    },
    poolCategory: PoolCategory.FARMING,
    tokenPerBlock: '10',
    harvest: true,
    sortOrder: 2,
    isFinished: false,
    lpSymbol: 'LOOPS-BNB LP'
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.lpLoopsBusd,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x883F18e4B364D637F6A05e3db101956764e38384',
      56: '',
    },
    poolCategory: PoolCategory.FARMING,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: 'LOOPS-BUSD LP',
  },
  /**
   * SpecialPools start from 500
   */
  {
    sousId: 500,
    stakingToken: serializedTokens.loops,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0xe9b73Ee61028cF5F046A77Bd623528f5817f4867',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "LOOPS: Pool Allowcated 60% of master pool",
  },
  {
    sousId: 501,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x0F84225231dBA0F33a80fe7fc9cbc612e3733523',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "USDT: Pool Allowcated 8% of master pool",
  },
  {
    sousId: 502,
    stakingToken: serializedTokens.wbnb,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x4a7d7fd7725Aaf1b3f36e3790C0acCAea1f39329',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "WBNB: Pool Allowcated 8% of master pool",
  },
  {
    sousId: 503,
    stakingToken: serializedTokens.btcb,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0x35664E2c01EB2a94c43ecD667cf3d60f496fe9be',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "BTCB: Pool Allowcated 8% of master pool",
  },
  {
    sousId: 504,
    stakingToken: serializedTokens.eth,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0xaF98293613F30c7f4d6F73f39031C01ADf0Cb358',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "ETH: Pool Allowcated 8% of master pool",
  },
  {
    sousId: 505,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.loops,
    contractAddress: {
      97: '0xd398F6188270df301e083BeC60E77eb3fD129A8C',
      56: '',
    },
    poolCategory: PoolCategory.SPECIAL,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
    poolNote: "CAKE: Pool Allowcated 8% of master pool",
  },
]

export default pools
