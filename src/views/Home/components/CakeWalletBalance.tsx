import React from 'react'
import styled from 'styled-components'
import { Text } from '@defifarms/special-uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getLoopsAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'
import { usePriceCakeBusd } from '../../../state/farms/hooks'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: cakeBalance } = useTokenBalance(getLoopsAddress())
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(cakePriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return <Text color="textDisabled">{t('Locked')}</Text>
  }

  const Block = styled.div``

  return (
    <Block>
      <CardValue value={getBalanceNumber(cakeBalance)} decimals={4} lineHeight="1.5" color="four" />
      
      {/* {cakePriceBusd.gt(0) ? <CardBusdValue value={busdBalance} /> : <br />} */}
    </Block>
  )
}

export default CakeWalletBalance
