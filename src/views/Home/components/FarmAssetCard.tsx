import React, { Fragment } from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { ArrowForwardIcon, Card, CardBody, Flex, Heading } from '@defifarms/special-uikit'
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
  background: radial-gradient(99.83% 99.83% at 42.32% 47.12%, #ffffff 11.98%, #d4d8f3 97.92%);
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
  background-color: rgba(207, 211, 245, 0.8);
  border-radius: 100px;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
`

const CardImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`

const activeNonCakePools = pools.filter((pool) => pool.earningToken.symbol !== 'DEFIY')
const latestPools: SerializedPool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 5)

export interface FarmAssetCardProps {
  title: string
  value: string
  navLink?: string
}

const FarmAssetCard = ({ title, value, navLink }: FarmAssetCardProps) => {
  const { t } = useTranslation()
  const Link = navLink ? NavLink : Fragment

  return (
    <StyledFarmStakingCard>
      <CardImage src="/images/home/farm.png" />
      <StyledCardBody>
        <Link exact activeClassName="active" to="/farms" id="pool-cta">
          <CardBody>
            <Heading scale="md" color="#0F0B5F">
              {t(title)}
            </Heading>
            <CardMidContent color="#0F0B5F">{t(value)}</CardMidContent>
            {navLink && (
              <Flex justifyContent="space-between" alignItems="baseline">
                <Heading color="#0F0B5F" scale="md">
                  in farms
                </Heading>
                <StyleCircleButton>
                  <ArrowForwardIcon color="#0F0B5F" fill="#0F0B5F" />
                </StyleCircleButton>
              </Flex>
            )}
          </CardBody>
        </Link>
      </StyledCardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmAssetCard
