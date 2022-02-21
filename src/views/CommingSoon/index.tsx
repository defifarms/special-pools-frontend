import { BaseLayout, Heading, Text, Flex, Button, useMatchBreakpoints } from '@loopstarter/special-uikit'
import { MainBackground } from 'components/Layout/MainBackground'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import {
  TelegramIcon,
  TwitterIcon,
  TopLeftCircle,
  TopRightCircle,
  BottomLeftCircle,
  BottomRightCircle,
  TopLeftCircleSM,
  TopRightCircleSM,
  BottomRightCircleSM,
} from './icons'

const Hero = styled.div`
  height: 100%;
  max-height: 800px;
  display: flex;
  margin: auto;
  margin-bottom: 24px;
  padding-top: 116px;
  background: #722dee90;
  backdrop-filter: blur(200px);
  border-radius: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const HeadingWrapper = styled.div`
  margin-left: 0;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0;
    text-align: unset;
  }
`

const CardImage = styled.div`
  background-image: url(/images/home/ufo-coming-soon.png);
  width: 80%;
  height: 100%;
  max-width: 400px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${({ theme }) => theme.mediaQueries.xs} {
    // width: 155px;
  }
`

const HeadingHome = styled(Text)`
  font-family: HK Grotesk;
  font-style: normal;
  line-height: 57px;
  background: #fff;
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  margin-top: 9px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 72px;
  }
`

const TextHome = styled(Text)`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0em;
`

const WrapSocialIcon = styled.div`
  margin-left: 16px;
  cursor: pointer;
  z-index: 2;
`
// https://twitter.com/DeFiFarmsNFTs

const Home: React.FC = () => {
  const { t } = useTranslation()

  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl

  return (
    <>
      <MainBackground>
        <Page style={{ height: '100%' }}>
          <Hero>
            {isLargerScreen ? (
              <>
                <div style={{ position: 'absolute', top: 0, left: 0 }}>
                  <TopLeftCircle />
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                  <BottomRightCircle />
                </div>
                <div style={{ position: 'absolute', bottom: 57, left: 57 }}>
                  <BottomLeftCircle />
                </div>
                <div style={{ position: 'absolute', top: 52, right: 63 }}>
                  <TopRightCircle />
                </div>
              </>
            ) : (
              <>
                <div style={{ position: 'absolute', top: 32, left: 24 }}>
                  <TopLeftCircleSM />
                </div>
                <div style={{ position: 'absolute', top: 32, right: 0 }}>
                  <TopRightCircleSM />
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                  <BottomRightCircleSM />
                </div>
              </>
            )}
            <HeadingWrapper>
              <HeadingHome fontSize={isLargerScreen ? '72px' : '48px'} mb="24px" style={{ marginTop: 160 }} color="#fff">
                {t('COMING SOON')}
              </HeadingHome>
              <TextHome fontSize={isLargerScreen ? '24px' : '16px'} mb={18} style={{ marginTop: isLargerScreen ? 24 : 8 }} color="#fff">
                {t('ARE YOU READY?')}
              </TextHome>
              <CardImage />
            </HeadingWrapper>
            <Flex mt={24}>
              <WrapSocialIcon>
                <Button paddingX={0} id="telegram" as="a" external href="https://t.me/DefifarmsNFT" variant="text">
                  {/* <LinkExternal id="Telegram" href="https://t.me/DefifarmsNFT"> */}
                  <TelegramIcon />
                  {/* </LinkExternal> */}
                </Button>
              </WrapSocialIcon>
              <WrapSocialIcon>
                <Button
                  paddingX={0}
                  id="twitter"
                  as="a"
                  external
                  href="https://twitter.com/DeFiFarmsNFTs"
                  variant="text"
                >
                  {/* <LinkExternal id="Twitter" href="https://twitter.com/DeFiFarmsNFTs"> */}
                  <TwitterIcon />
                  {/* </LinkExternal> */}
                </Button>
              </WrapSocialIcon>
            </Flex>
          </Hero>
        </Page>
      </MainBackground>
    </>
  )
}

export default Home
