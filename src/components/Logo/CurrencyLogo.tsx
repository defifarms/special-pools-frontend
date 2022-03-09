import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { BinanceIcon } from '@loopstarter/special-uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const getImageUrlFromToken = (address: string) => {
    return `${window.location.origin}/images/tokens/${address}.png`
  }
  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getImageUrlFromToken(currency.address)]
      }
      return [getImageUrlFromToken(currency.address)]
    }
    return []
  }, [currency, uriLocations])
  
  if (currency === ETHER || currency?.symbol?.toLocaleUpperCase() === 'WBNB') {
    return <BinanceIcon width={size} style={style} />
  }
  // console.log('srcs', srcs)
  
  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
