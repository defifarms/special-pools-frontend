import { Button, Flex, Heading, Text } from '@defifarms/special-uikit'
import { TokenImage } from 'components/TokenImage'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Link } from 'react-router-dom'
import { SpecialPoolConfigType } from 'state/types'
import styled from 'styled-components'

const ItemWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #2c007c80;
  backdrop-filter: blur(200px);
  border-radius: ${({ theme }) => theme.radii.default};
  margin: 8px 16px 16px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 8px 32px 16px;
  }
`
const CountDownBlock = styled.div`
  background: rgba(255, 54, 139, 0.8);
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  width: 100%;
`
const HeaderItem = styled(Flex)`
  background: #2c007c80;
  backdrop-filter: blur(200px);
  padding: 24px 24px;
`
const BodyItem = styled.div`
  padding: 16px 24px;
`
const ButtonEnterPool = styled(Button)`
  background-color: #ffb230;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  height: 44px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextTime = styled(Text)`
  font-family: HK Grotesk;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 21px;
  }
`

const HeadingSpecial = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  color: #fff;
  padding-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 57px;
    line-height: 66px;
  }
`

const SpecialPoolItem: React.FC<{ poolConfig: SpecialPoolConfigType }> = ({ poolConfig }) => {
  const { t } = useTranslation()

  return (
    <ItemWrap>
      <HeaderItem justifyContent="space-between" flexDirection={['column', null, null, 'row']} width="100%">
        <Flex flex="1" flexDirection="row" alignItems='center' mr={['8px', 0]}>
          <TokenImage token={tokens.defiy} width={40} height={40} />
          <Text fontSize='24px' fontWeight={600} pl='8px'>{t('Special Pools start on')}</Text>
        </Flex>
        <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
          <CountDownBlock>
            <Flex justifyContent="space-between">
              <Text>{t('Block #14857976')}</Text>
              <Flex flexDirection="column">
                <Text fontWeight={600}>4days 3h:25m:39s</Text>
                <TextTime>November 5th 2021</TextTime>
              </Flex>
            </Flex>
          </CountDownBlock>
        </Flex>
      </HeaderItem>
      <BodyItem>
        <Flex flexDirection="column" mb="24px">
          <HeadingSpecial as="h1" scale="xxl">
            {poolConfig.name}
          </HeadingSpecial>
          <Text>{t('Stake token DEFIY, BUSD, WBNB, BTCT, ATH, CAKE and earn $DEFIY')}</Text>
        </Flex>
        <Flex justifyContent="space-between" mb="8px">
          <Text>{t('Total')}</Text>
          <Text color="#FF97CF">{t('30.000$')}</Text>
        </Flex>
        <Flex justifyContent="space-between" mb="8px">
          <Text>{t('APR (%)')}</Text>
          <Text color="#FF97CF">{t('20%')}</Text>
        </Flex>
        <Flex justifyContent="space-between" mb="8px">
          <Text>{t('Invest time')}</Text>
          <Text color="#FF97CF">{t('20 days')}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="16px" mt="38px">
          <ButtonEnterPool as={Link} variant="primary" scale="md" to={`/${poolConfig.link}`}>
            <Text fontSize="16px" fontWeight={600}>
              {t('Enter pool')}
            </Text>
          </ButtonEnterPool>
        </Flex>
      </BodyItem>
    </ItemWrap>
  )
}

export default SpecialPoolItem
