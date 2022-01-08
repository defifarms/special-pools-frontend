import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@defifarms/special-uikit'
import { useTranslation } from 'contexts/Localization'

const StyledAnnouncements = styled(Card)`
  grid-column: span 6;
  width: 100%;
  background: radial-gradient(102.57% 100.59% at 52.92% 46.36%, #ffffff 15.39%, #d4d8f3 97.92%);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: span 8;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: span 4;
  }
`

const TwitterDashboard = styled.div`
  font-size: 16px;
  line-height: 24px;
`

const HeadingCard = styled(Heading)`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 30.3722px;
  line-height: 35px;
  color: #0f0b5f;
`

const Link = styled.a`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 19.4763px;
  line-height: 23px;
  color: #0f0b5f;
`

const Announcements = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const scriptTag = document.createElement('script')

    scriptTag.src = 'https://platform.twitter.com/widgets.js'
    scriptTag.async = true

    document.getElementById('twitterDashboard').appendChild(scriptTag)
  }, [])

  return (
    <StyledAnnouncements>
      <CardBody>
        <HeadingCard scale="xl">{t('Announcements')}</HeadingCard>
        <TwitterDashboard id="twitterDashboard">
          <Link
            className="twitter-timeline"
            data-height="400"
            data-theme="light"
            href="https://twitter.com/DeFiFarmsNFTs?ref_src=twsrc%5Etfw"
          >
            Tweets
          </Link>
        </TwitterDashboard>
      </CardBody>
    </StyledAnnouncements>
  )
}

export default Announcements
