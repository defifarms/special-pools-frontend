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
  background: #ff368b80;
  height: 100%;
  padding: 16px;
  backdrop-filter: blur(200px);
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
                <Text>November 5th 2021</Text>
              </Flex>
            </Flex>
          </CountDownBlock>
        </Flex>
      </HeaderItem>
      <BodyItem>
        <Flex flexDirection="column" mb="24px">
          <Heading as="h1" scale="xxl" color="white">
            {poolConfig.name}
          </Heading>
          <Text>{t('Stake token DEFY, BUSD, WBNB, BTCT, ATTH, CAKE and ern $DEFIY')}</Text>
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
        <Flex alignItems="center" justifyContent="center" mb="16px">
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
