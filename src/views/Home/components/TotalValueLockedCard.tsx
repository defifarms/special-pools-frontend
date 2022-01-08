import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@defifarms/special-uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from '../../../hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const HeadingCard = styled(Heading)`
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(26, 36, 59, 0.17);
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <HeadingCard scale="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </HeadingCard>
        Updating
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
