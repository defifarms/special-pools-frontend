import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { ArrowForwardIcon, Card, CardBody, Flex, Heading } from '@loopstarter/special-uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { SerializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'

const StyledCardBody = styled.div`
  width: 100%;
  height: 209px;
  position: absolute;
  top: 0;
`

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-position: 36px;
  background-size: contain;
  width: 100%;
  height: 209px;
  background: linear-gradient(245.92deg, #fe616d 11.13%, #ff4e5c 95.14%);
  border-radius: 13px;
  grid-column: span 12;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
    margin-bottom: 0;
    grid-column: span 4;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: span 4;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
  padding-bottom: 28px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
`
const StyleCircleButton = styled.div`
  width: 44px;
  height: 44px;
  background-color: rgba(245, 246, 252, 0.5);
  border-radius: 100px;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
`

const CardImage = styled.img`
  width: 100%;
`

const activeNonCakePools = pools.filter((pool) => pool.earningToken.symbol !== 'LOOPS')
const latestPools: SerializedPool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 5)
// Always include CAKE
const assets = ['LOOPS', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

const EarnAssetCard = () => {
  const { t } = useTranslation()
  const assetText = t('Earn %assets% in Pools', { assets })
  const [earn, InPools] = assetText.split(assets)

  return (
    <StyledFarmStakingCard>
      <CardImage src="/images/home/pool.png" />
      <StyledCardBody>
        <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
          <CardBody>
            <Heading scale="md" color="#fff">
              {earn}
            </Heading>
            <CardMidContent color="#fff">{assets}</CardMidContent>
            <Flex justifyContent="space-between" alignItems="baseline">
              <Heading color="#fff" scale="md">
                {InPools}
              </Heading>
              <StyleCircleButton>
                <ArrowForwardIcon color="white" fill="#fff" />
              </StyleCircleButton>
            </Flex>
          </CardBody>
        </NavLink>
      </StyledCardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
