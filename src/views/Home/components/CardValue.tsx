import React, { useEffect, useRef, memo } from 'react'
import { useCountUp } from 'react-countup'
import styled from 'styled-components'
import { Text } from '@defifarms/special-uikit'

export interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  lineHeight?: string
  prefix?: string
  bold?: boolean
  color?: string
}

const StyleText = styled(Text)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`

const CardValue: React.FC<CardValueProps> = ({
  value,
  decimals,
  lineHeight = '1',
  prefix = '',
  bold = true,
  color = 'text',
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyleText style={{ lineHeight }} color={color}>
      {prefix}
      {countUp}
      {/* {value.toFixed(2)} */}
    </StyleText>
  )
}

export default memo(CardValue)
