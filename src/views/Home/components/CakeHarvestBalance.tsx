import React from 'react'
import { Text } from '@loopstarter/special-uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { FarmWithBalance, PoolWithBalance } from 'views/Home/hooks/useFarmsWithBalance'
import styled from 'styled-components'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CardValue from './CardValue'

const Block = styled.div``

interface CakeHarvestBalanceProps {
  farmsWithBalance: FarmWithBalance[]
  poolsWithBalance: PoolWithBalance[]
}

const CakeHarvestBalance: React.FC<CakeHarvestBalanceProps> = ({ farmsWithBalance, poolsWithBalance }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const earningsSumFarms = farmsWithBalance.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning.balance)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)

  const earningsSumPools = poolsWithBalance.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning.balance)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)

  const earningsSum = earningsSumFarms + earningsSumPools

  if (!account) {
    return (
      <Text color="textDisabled" lineHeight="1.5">
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue color="textDisabled" value={earningsSum} lineHeight="1.5" />
    </Block>
  )
}

export default CakeHarvestBalance
