import React from 'react'
import { Heading, Text, Flex } from '@defifarms/special-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import Slider from 'react-slick'
import { useTranslation } from 'contexts/Localization'
import { getDefiyAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from '../../../state/farms/hooks'

const StyledContainer = styled.div`
  background-image: url(/images/home/team-bg.webp);
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 36px 24px 96px;
  margin-top: 24px;
}
`

const HeadingCard = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 0 0 42px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 36px;
  }
`

const CardWrapper = styled.div`
  width: 100% !important;
  height: 379px;
  background: #f9fafd;
  border-radius: 10px;
  overflow: hidden;
  padding: 18px;
  margin-bottom: 25px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 270px !important;
    margin-bottom: 0;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 234px;
`

const CardName = styled(Text)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: #0f0b5f;
  padding: 10px 0 5px;
`

const CardDesc = styled(Text)`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #0f0b5f;
  padding: 0 0 8px;
`

const CardButton = styled.a`
  width: 103px;
  height: 30px;
  background: #3ab6de;
  border-radius: 100px;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 14.9874px;
  line-height: 17px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SliderWrapper = styled.div`
  padding: 0 0 50px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 35px 50px;
  }
`

const FlexBox = styled.div`
  display: flex !important;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Partners = styled.img<{ margin?: string }>`
  width: 270px;
  height: 116px;
  margin: ${({ margin }) => margin || '0 15px'};
`

const teams = [
  {
    image: '/images/home/teams/cesar.webp',
    name: 'Cesar Deandre',
    position: 'CEO & Co-Founder',
    linkedin: 'https://www.linkedin.com/in/cesar-deandre-b0867b1b3/',
  },
  {
    image: '/images/home/teams/zack.webp',
    name: 'Zackhary Brown',
    position: 'CMO & Co-Founder',
    linkedin: 'https://www.linkedin.com/in/zackhary-brown-ab3b731ba/',
  },
  {
    image: '/images/home/teams/harr.webp',
    name: 'Harrik Medsam',
    position: 'Chief Finacial Officer',
    linkedin: 'https://www.linkedin.com/in/harrik-medsam-22137120b/',
  },
  {
    image: '/images/home/teams/blake.webp',
    name: 'Blake Dalton',
    position: 'Blockchain Developer',
    linkedin: 'https://www.linkedin.com/in/blake-dalton-8a4577206/',
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getDefiyAddress()))
  const slides = []

  for (let i = 0; i < teams.length; i++) {
    slides.push(
      <div style={{ padding: '0 10px' }}>
        <CardWrapper>
          <CardImage src={teams[i].image} />
          <CardName>{teams[i].name}</CardName>
          <CardDesc>{teams[i].position}</CardDesc>
          <CardButton href={teams[i].linkedin} target="_blank">
            in
          </CardButton>
        </CardWrapper>
      </div>,
    )
  }

  return (
    <StyledContainer>
      <HeadingCard color="#fff" scale="xl" mb="8px">
        {t('Team Members')}
      </HeadingCard>
      <SliderWrapper>
        <Slider {...settings}>
          <FlexBox>
            <div style={{ padding: '0 10px' }}>
              <CardWrapper>
                <CardImage src={teams[0].image} />
                <CardName>{teams[0].name}</CardName>
                <CardDesc>{teams[0].position}</CardDesc>
                <CardButton href={teams[0].linkedin} target="_blank">
                  in
                </CardButton>
              </CardWrapper>
            </div>
            <div style={{ padding: '0 10px' }}>
              <CardWrapper>
                <CardImage src={teams[1].image} />
                <CardName>{teams[1].name}</CardName>
                <CardDesc>{teams[1].position}</CardDesc>
                <CardButton href={teams[1].linkedin} target="_blank">
                  in
                </CardButton>
              </CardWrapper>
            </div>
            <div style={{ padding: '0 10px' }}>
              <CardWrapper>
                <CardImage src={teams[2].image} />
                <CardName>{teams[2].name}</CardName>
                <CardDesc>{teams[2].position}</CardDesc>
                <CardButton href={teams[2].linkedin} target="_blank">
                  in
                </CardButton>
              </CardWrapper>
            </div>
          </FlexBox>
          <FlexBox>
            <div style={{ padding: '0 10px' }}>
              <CardWrapper>
                <CardImage src={teams[3].image} />
                <CardName>{teams[3].name}</CardName>
                <CardDesc>{teams[3].position}</CardDesc>
                <CardButton href={teams[3].linkedin} target="_blank">
                  in
                </CardButton>
              </CardWrapper>
            </div>
          </FlexBox>
        </Slider>
      </SliderWrapper>
      <HeadingCard color="#fff" scale="xl" mb="8px">
        {t('Partners & Investors')}
      </HeadingCard>
      <Flex justifyContent="center" pb="24px" flexWrap="wrap">
        <Partners src="/images/home/teams/basics.png" margin="11px 11px" />
        <Partners src="/images/home/teams/nodle.png" margin="11px 11px" />
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        <Partners src="/images/home/teams/ngc.png" margin="0 11px 24px" />
        <Partners src="/images/home/teams/orient.png" margin="0 11px 24px" />
        <Partners src="/images/home/teams/kai.png" margin="0 11px 24px" />
        <Partners src="/images/home/teams/mint.png" margin="0 11px 24px" />
        <Partners src="/images/home/teams/ichi.png" margin="0 11px 24px" />
        <Partners src="/images/home/teams/seoul.png" margin="0 11px 24px" />
      </Flex>
    </StyledContainer>
  )
}

export default CakeStats
