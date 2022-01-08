import { Heading, Text, Flex, LogoIcon } from '@defifarms/special-uikit'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useCountDownTimer from 'hooks/useCountDownTimer'
import Time from './Time'

const bscUrl = `https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=${process.env.REACT_APP_BSC_BLOCK_NO}&apikey=${process.env.REACT_APP_BSC_API_KEY}`

interface ThemedBlock {
  disable?: boolean
  margin?: string
}

interface ThemedImage {
  width?: string
  height?: string
}

interface StyleIcon {
  bg: string
}

const Hero = styled.div`
  margin: auto;
  margin-bottom: 24px;
  padding-top: 116px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  padding: 19px 18px;
  background: #ffa800;
  opacity: 0.98;
  backdrop-filter: blur(200px);
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 40px 50px 46px 60px;
    justify-content: space-between;
    text-align: unset;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: end;
  padding-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
    text-align: unset;
  }
`

const HeroWrapper = styled.div`
  background-image: url(/images/home/ido.png);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`

const HeadingWrapper = styled.div`
  width: 414px;
`

const Image = styled.img<ThemedImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin-top: 10px;
  }
`

const HeadingHome = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 9px;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
  }
`

const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 25px 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
  }
`

const Label = styled(Text)`
  margin: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  & > span {
    font-family: HK Grotesk Bold;
  }
`

const StyledButtonMenu = styled.a`
  font-family: HK Grotesk Bold;
  font-size: 15.683px;
  color: #ffffff;
  border-radius: 100px;
  background: #00bde4;
  padding: 11px 56px;
  text-align: center;
  display: inline-block;
  ${({ theme }) => theme.mediaQueries.md} {
    float: right;
  }
`

const Block = styled.div<ThemedBlock>`
  width: 100%;
  height: 66.89px;
  background: ${({ disable }) => (disable ? '#E3E3E3' : '#fff')};
  border-radius: 4px;
  padding: 13px 10px 0;
  margin: ${({ margin }) => margin || '0px'};
  ${({ theme }) => theme.mediaQueries.md} {
    width: 147.36px;
    margin: ${({ margin }) => margin || '0px'};
  }
`

const BlockLabel = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 15px;
  color: #333333;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12.8px;
  }
`

const BlockValue = styled.p`
  font-family: HK Grotesk Bold;
  font-weight: 500;
  font-size: 11px;
  line-height: 22px;
  color: #333333;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 19px;
  }
`

const TimeWrapper = styled(Flex)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 13px;
  margin-bottom: 11px;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
    margin-right: 40px;
  }
`

const RealWrapper = styled(Flex)`
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 25px 15px 15px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
  }
`

const RealTextWrapper = styled.div`
  padding: 0;
  justify-content: center;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 110px 0 28px;
  }
`

const RealLabel = styled(Text)`
  font-family: HK Grotesk Bold;
  font-size: 18px;
  line-height: 21px;
  color: #000;
  padding-top: 15px;
`

const RealDesc = styled(RealLabel)`
  font-size: 15.683px;
  line-height: 18px;
  color: #333;
  padding-top: 10px;
`

const Icon = styled.span<StyleIcon>`
  width: 25px;
  height: 25px;
  display: block;
  background-image: ${({ bg }) => `url(${bg})`};
  margin-right: 20px;
  border-radius: 50%;
`

const ImageWrapper = styled.div`
  width: 150px;
  height: 130px;
  background: #FFEEDC;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 5px 5px 0;
    margin-right: 25px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`

const Price = styled.p`
  font-family: HK Grotesk Bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  padding: 15px 0 46px;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: right;
  }
`

const IconWrapper = styled(Flex)`
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: flex-start;
`

const PriceWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`

const UpcomingIdo: React.FC = () => {
  const [data, setData] = useState({
    CountdownBlock: '',
    CurrentBlock: '',
    EstimateTimeInSec: 0,
    RemainingBlock: '',
  })
  const [nextTime, setNextTime]= useState('')
  const { t } = useTranslation()

  const [timeHarvestRemaining, setTimeHarvestRemaining] = useCountDownTimer()
  useEffect(() => {
    const time = new Date(new Date().getTime() + data.EstimateTimeInSec *1000)
    setNextTime(time.toString())
    setTimeHarvestRemaining(data.EstimateTimeInSec * 1000)
  }, [setTimeHarvestRemaining, data.EstimateTimeInSec])



  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(bscUrl)
      const res = await response.json()
      setData(res.result)
    }

    fetchMyAPI()
  }, [])

  const timeLeft = timeHarvestRemaining ? {
    days: Math.floor(timeHarvestRemaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeHarvestRemaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeHarvestRemaining / 1000 / 60) % 60),
    seconds: Math.floor((timeHarvestRemaining / 1000) % 60),
  } : {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  return (
    <Hero>
      <HeaderWrapper>
        <HeadingWrapper>
          <HeadingHome as="h1" scale="xl" mb="24px">
            {t('Upcoming IDO')}
          </HeadingHome>
          <TimeWrapper>
            <Time time={timeLeft.days} label="Day" />
            <Time time={timeLeft.hours} label="Hours" />
            <Time time={timeLeft.minutes} label="Minutes" />
            <Time time={timeLeft.seconds} label="Seconds" />
          </TimeWrapper>
          <Label>
            Estimated Target Date: <span>{nextTime}</span>
          </Label>
        </HeadingWrapper>
        <BlockWrapper>
          <Block>
            <BlockLabel>Countdown For block:</BlockLabel>
            <BlockValue>#{data.CountdownBlock}</BlockValue>
          </Block>
          <Block disable margin="0 10px">
            <BlockLabel>Current Block:</BlockLabel>
            <BlockValue>#{data.CurrentBlock}</BlockValue>
          </Block>
          <Block disable>
            <BlockLabel>Remaining Block:</BlockLabel>
            <BlockValue>#{data.RemainingBlock}</BlockValue>
          </Block>
        </BlockWrapper>
      </HeaderWrapper>
      <RealWrapper>
        <Grid>
          <ImageWrapper>
            <LogoIcon />
          </ImageWrapper>
          <Image width="51px" height="51px" alt="alt" src="/images/home/defiLogo.png" />
          <RealTextWrapper>
            <RealLabel>DEFIY</RealLabel>
            <RealDesc>The 1st cross-chain liquidity DEX on Avalande</RealDesc>
            <IconWrapper>
            
              <a target="_blank" rel="noreferrer" href="https://defifarmsnfts.medium.com/"><Icon bg="/images/home/medium.png" /></a>
              <a target="_blank" rel="noreferrer" href="https://t.me/DefifarmsNFT"><Icon bg="/images/home/telegram.png" /></a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/DeFiFarmsNFTs"><Icon bg="/images/home/twitter.png" /></a>
            </IconWrapper>
          </RealTextWrapper>
        </Grid>
        <PriceWrapper>
          <Price>(DEFIY/BUSD)</Price>
          <StyledButtonMenu href="https://docs.defifarms.org/" target="_blank">
            {t('More details')}
          </StyledButtonMenu>
        </PriceWrapper>
      </RealWrapper>
      <HeroWrapper />
    </Hero>
  )
}

export default UpcomingIdo
