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
    stakingToken: serializedTokens.defiy,
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x2C149949B4B8cc29FDCD251ab1d58a5c7fD4996d',
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
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x7630396C31Cc18232f9409Cc4dfe9e11DAE7cD3d',
      56: '',
    },
    poolCategory: PoolCategory.FARMING,
    tokenPerBlock: '10',
    harvest: true,
    sortOrder: 2,
    isFinished: false,
    lpSymbol: 'LOOPS-BNB LP'
  },
  /**
   * SpecialPools start from 500
   */
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
    poolNote: "LOOPS: Pool Allowcated 60% of master pool",
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
  //   poolNote: "USDT: Pool Allowcated 8% of master pool",
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
  //   poolNote: "WBNB: Pool Allowcated 8% of master pool",
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
  //   poolNote: "BTCB: Pool Allowcated 8% of master pool",
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
  //   poolNote: "ETH: Pool Allowcated 8% of master pool",
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
  //   poolNote: "CAKE: Pool Allowcated 8% of master pool",
  // },
]

export default pools
