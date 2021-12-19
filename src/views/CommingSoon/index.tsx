import { BaseLayout, Heading, Text, Flex, Button } from '@defifarms/special-uikit'
import { MainBackground } from 'components/Layout/MainBackground'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'

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
  padding: 30px;
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

const HeadingHome = styled(Heading)`
  font-family: HK Grotesk;
  font-style: normal;
  font-size: 72px;
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
  line-height: 27px;
  letter-spacing: 0em;
`

const FlexBox = styled(Flex)`
  align-items: center;
  padding-top: 20px;
`

const WrapSocialIcon = styled.div`
  margin-left: 16px;
  cursor: pointer;
  z-index: 2
`
// https://twitter.com/DeFiFarmsNFTs

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <MainBackground>
        <Page style={{ height: '100%' }}>
          <Hero>
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
            <HeadingWrapper>
              <CardImage />
              <HeadingHome as="h1" scale="xl" mb="24px" color="#fff">
                {t('COMING SOON')}
              </HeadingHome>
              <TextHome fontSize="24px" mb={18} mt={24} color="#fff">
                {t('ARE YOU READYS')}
              </TextHome>
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

const TelegramIcon = (props) => (
  <svg viewBox="0 0 40 40" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.192 0a20.192 20.192 0 1 0 0 40.385 20.192 20.192 0 0 0 0-40.385Z" fill="#29B6F6" />
    <path
      d="m30.238 11.106-3.782 19.31s-.162.882-1.257.882c-.582 0-.881-.276-.881-.276l-8.192-6.798-4.009-2.02-5.144-1.369s-.915-.264-.915-1.021c0-.631.942-.932.942-.932l21.52-8.55s.658-.237 1.137-.236c.295 0 .631.126.631.505 0 .252-.05.505-.05.505Z"
      fill="#fff"
    />
    <path
      d="m19.183 26.76-3.46 3.407s-.15.116-.35.12a.496.496 0 0 1-.222-.043l.974-6.022 3.058 2.538Z"
      fill="#B0BEC5"
    />
    <path
      d="M26.146 14.332a.505.505 0 0 0-.708-.093l-13.323 7.973s2.127 5.948 2.45 6.978c.326 1.03.586 1.055.586 1.055l.974-6.022 9.926-9.184a.504.504 0 0 0 .095-.707Z"
      fill="#CFD8DC"
    />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 41 40" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20.577} cy={20.192} r={20.192} fill="#fff" />
    <path
      d="M33.56 12.569c-.954.423-1.98.705-3.063.838a5.322 5.322 0 0 0 2.345-2.926 10.692 10.692 0 0 1-3.385 1.28 5.32 5.32 0 0 0-3.883-1.665c-2.943 0-5.327 2.364-5.327 5.279 0 .412.048.814.139 1.204a15.18 15.18 0 0 1-10.979-5.52 5.268 5.268 0 0 0 1.648 7.054 5.423 5.423 0 0 1-2.415-.658v.062c0 2.56 1.836 4.693 4.271 5.178a5.3 5.3 0 0 1-1.4.19 5.66 5.66 0 0 1-1.003-.097 5.337 5.337 0 0 0 4.974 3.668 10.764 10.764 0 0 1-7.886 2.185 15.223 15.223 0 0 0 8.166 2.369c9.797 0 15.157-8.046 15.157-15.025 0-.228-.007-.456-.018-.681a10.478 10.478 0 0 0 2.659-2.735Z"
      fill="#03A9F4"
    />
  </svg>
)

const TopLeftCircle = (props) => (
  <svg {...props} width="207px" height="182px" viewBox="0 0 207 182" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_794_1866)">
      <mask
        id="mask0_794_1866"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={207}
        height={182}
      >
        <rect
          opacity={0.9}
          x={207}
          y={181.479}
          width={207}
          height={181.479}
          rx={10}
          transform="rotate(-180 207 181.479)"
          fill="#722DEE"
        />
      </mask>
      <g mask="url(#mask0_794_1866)">
        <g opacity={0.9} filter="url(#filter1_b_794_1866)">
          <circle
            cx={92.6301}
            cy={49.6234}
            r={110.589}
            transform="rotate(-180 92.6301 49.6234)"
            fill="#965BFF"
            fillOpacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_794_1866"
        x={-100}
        y={-100}
        width={403.219}
        height={360.212}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1866" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1866" result="shape" />
      </filter>
      <filter
        id="filter1_b_794_1866"
        x={-117.959}
        y={-160.966}
        width={421.178}
        height={421.178}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1866" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1866" result="shape" />
      </filter>
    </defs>
  </svg>
)

const BottomRightCircle = (props) => (
  <svg {...props} width="438px" height="384px" viewBox="0 0 438 384" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_794_1862)">
      <mask
        id="mask0_794_1862"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={438}
        height={384}
      >
        <rect opacity={0.9} width={438} height={384} rx={10} fill="#722DEE" />
      </mask>
      <g mask="url(#mask0_794_1862)">
        <g opacity={0.9} filter="url(#filter1_b_794_1862)">
          <circle cx={242} cy={279} r={234} fill="#965BFF" fillOpacity={0.5} />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_794_1862"
        x={-92}
        y={-55}
        width={630}
        height={539}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1862" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1862" result="shape" />
      </filter>
      <filter
        id="filter1_b_794_1862"
        x={-92}
        y={-55}
        width={668}
        height={668}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1862" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1862" result="shape" />
      </filter>
    </defs>
  </svg>
)

const TopRightCircle = (props) => (
  <svg {...props} width="184px" height="184px" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_794_1872)">
      <g opacity={0.9} filter="url(#filter1_b_794_1872)">
        <circle cx={92} cy={92} r={92} fill="#965BFF" fillOpacity={0.5} />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_794_1872"
        x={-100}
        y={-100}
        width={384}
        height={384}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1872" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1872" result="shape" />
      </filter>
      <filter
        id="filter1_b_794_1872"
        x={-100}
        y={-100}
        width={384}
        height={384}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1872" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1872" result="shape" />
      </filter>
    </defs>
  </svg>
)

const BottomLeftCircle = (props) => (
  <svg {...props} width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_794_1875)">
      <g opacity={0.9} filter="url(#filter1_b_794_1875)">
        <circle cx={51.5} cy={51.5} r={51.5} fill="#965BFF" fillOpacity={0.5} />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_794_1875"
        x={-100}
        y={-100}
        width={303}
        height={303}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1875" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1875" result="shape" />
      </filter>
      <filter
        id="filter1_b_794_1875"
        x={-100}
        y={-100}
        width={303}
        height={303}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_794_1875" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_794_1875" result="shape" />
      </filter>
    </defs>
  </svg>
)
