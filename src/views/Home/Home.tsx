import { BaseLayout, Heading, Text, Flex } from '@loopstarter/special-uikit'
// import TotalValueLockedCard from './components/TotalValueLockedCard'
import { MainBackground } from 'components/Layout/MainBackground'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import Announcements from './components/Announcements'
import FarmedStakingCard from './components/FarmStakingCard'
import FarmAssetCard from './components/FarmAssetCard'
import TeamMember from './components/TeamMember'
import UpcomingIdo from './components/UpcomingIdo'

const Hero = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 24px;
  padding-top: 116px;
  background-color: #c4f4ff;
  border-radius: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 0;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0px;
    // text-align: center;
    // flex-wrap: wrap;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 24px;
    grid-gap: 24px;
  }
`

const MetaImage = styled.div`

`

const Wrapper = styled.div`
  height: 306px;
  width: 490px;
  overflow: hidden;
  border-radius: 10px;
`
const MetaWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
  border-radius: 50%;
  height: 450px;
  width: 450px;
  margin-top: 0;
  margin-left: -50px;
  padding-top: 22px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: -150px;
    padding-top: 150px;
    height: 573px;
    width: 573px;
    margin-left: 0;
  }
`
const HeadingWrapper = styled.div`
  width: 515px;
  margin-left: 0;
  padding: 30px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 70px;
    padding: 0;
    text-align: unset;
  }
`

const Image = styled.img`
  width: 425px;
  height: 306px;
  margin-left: 0px;
  margin-top: 1px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 25px;
  }
`
const CardImage = styled.div`
  background-image: ${({ theme }) =>
    theme.isDark
      ? 'url(/images/home/logo-partner-binance-smart-chain.png)'
      : 'url(/images/home/logo-partner-binance-smart-chain-light.png)'};
  height: 53px;
  width: 188px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 155px;
  }
`

const HeadingHome = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 49px;
  line-height: 57px;
  background: #0f0b5f;
  color: #0f0b5f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  margin-top: 9px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 47px;
  }
`

const TextHome = styled(Text)`
  font-family: HK Grotesk Light;
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
  letter-spacing: 0em;
`

const FlexBox = styled(Flex)`
  align-items: center;
  padding-top: 20px;
`
const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <MainBackground>
        <Page>
          <Hero>
            <HeadingWrapper>
              <HeadingHome as="h1" scale="xl" mb="24px">
                {t('LoopStarter')}
              </HeadingHome>
              <TextHome fontSize="18px" mb={18} color="#0F0B5F">
                {t('The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM')}
              </TextHome>

              <FlexBox>
                <TextHome fontSize="18px" mb={2} color="#FE0000">
                  {t('Powered by')}
                </TextHome>
                <CardImage />
              </FlexBox>
            </HeadingWrapper>
            <Wrapper>
              <MetaWrapper>
                <MetaImage>
                  <Image alt="alt" src="/images/home/bg-meta.png" />
                </MetaImage>
              </MetaWrapper>
            </Wrapper>
          </Hero>
          <UpcomingIdo />
          <div>
            <Cards>
              <FarmedStakingCard />
              <Announcements />
            </Cards>
            <Cards>
              <FarmAssetCard title="Earn up to" value="378.89% APR" navLink="/farms" />
              <EarnAssetCard />
              <FarmAssetCard title="Lottery" value="Coming Soon" />
            </Cards>
          </div>
          <CakeStats />
          <TeamMember />
        </Page>
      </MainBackground>
    </>
  )
}

export default Home
