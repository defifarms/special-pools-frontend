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
    stakingToken: serializedTokens.defiy,
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0xF29A919Ce75F6667D74aE1edaa442135DC008c58',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0xe477E8d7Cd901e6693A7438F3446d841FA87aFE7',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x66ed54521d02E5aa274123B5cDdDb1B9EA7B0FaD',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x0bFb76Fa3026738D747E08EBBE6C3BAb8602C413',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x8F85C526ac880e239Df13F42F804DD0bADa21c01',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0xd67d87Fd86cdff5f0dD8C006A40736Fc44C8eBa9',
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
