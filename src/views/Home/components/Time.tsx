import { Text } from '@defifarms/special-uikit'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'

const Label = styled(Text)`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  padding-top: 4px;
`

const StyleTime = styled.p`
  font-family: HK Grotesk bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #fff;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 36px;
    line-height: 42px;
  }
`

const Wrapper = styled.div`
  display: grid;
  width: fit-content;
  text-align: center;
  padding-right: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 0px;
  }
`

interface ITime {
  time: number
  label: string
}

const Time: React.FC<ITime> = ({ time, label }: ITime) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <StyleTime>{time}</StyleTime>
      <Label>{t(label)}</Label>
    </Wrapper>
  )
}

export default Time
