import { Flex, Heading, Text } from '@loopstarter/special-uikit'
import { MainBackground } from 'components/Layout/MainBackground'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import { SpecialPoolsConfig } from '../../config/constants/specialPoolConfig'
import SpecialPoolItem from './SpecialPoolItem'

const FlexBox = styled(Flex)`
  position: relative;
  z-index: 2;
`

const HeadingSpecial = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  color: #fff;
  padding-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
    line-height: 75px;
  }
`

const SpecialPools: React.FC = () => {
  const { t } = useTranslation()

  return (
    <MainBackground>
      <PageHeader background="linear-gradient(269.58deg, #FF368B 25.78%, #FF368B 88.47%)" pageName="special-pools">
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <FlexBox flex="1" flexDirection="column" mr={['8px', 0]}>
            <HeadingSpecial as="h1" scale="xxl" color="white">
              {t('Special Pools')}
            </HeadingSpecial>
            <Heading scale="md" color="white">
              {t('Just stake some tokens to earn. High APR, low risk.')}
            </Heading>
          </FlexBox>
          <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            {/* <HelpButton /> */}
            {/* <BountyCard /> */}
          </Flex>
        </Flex>
      </PageHeader>
      {SpecialPoolsConfig.map((specialPool) => {
        return (
          <Flex justifyContent="center">
            <SpecialPoolItem poolConfig={specialPool} />
          </Flex>
        )
      })}
    </MainBackground>
  )
}

export default SpecialPools
