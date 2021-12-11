import { Button, Card, Flex, Heading, Slider, Text, IconButton, ArrowBackIcon, Box } from '@defifarms/special-uikit'
import Container from 'components/Layout/Container'
import { MainBackground } from 'components/Layout/MainBackground'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'
import { formatNumber } from 'utils/formatBalance'
import { SpecialPoolsConfig } from '../SpecialPools/config'
import GroupChildrenPools from './components/GroupChildrenPools'

const CardSpecialPool = styled(Card)<{ background?: string }>`
  background-color: unset;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  margin-bottom: 24px;
`
const CardSpecialPoolHeader = styled.div<{ background?: string }>`
  padding: 16px;
  background: #2c007c;
`
const CardSpecialPoolBody = styled.div<{ background?: string }>`
  background: #2c007c80;
  padding: 16px;
  backdrop-filter: blur(5px);
`
const ContainerWrap = styled(Container)<{ background?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const StakeInfoWrap = styled(Flex)<{ background?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 16px 0 16px 16px;
  border: 1px solid #7b53c4;
  border-radius: 10px;
  background-color: #4a278a;
  padding: 16px;
`

const PoolName = styled.div`
  background: #ff368b80;
  backdrop-filter: blur(200px);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 8px 16px;

  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

const DetailSpecialPool: React.FC<RouteComponentProps<{ groupPool: string }>> = ({
  history,
  match: {
    params: { groupPool },
  },
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const currentSpecialPoolConfig = SpecialPoolsConfig.find((pool) => pool.link === groupPool)

  return (
    <MainBackground>
      <ContainerWrap>
        <CardSpecialPool>
          <CardSpecialPoolHeader>
            <Flex justifyContent="space-between">
              <Flex flex={1} alignItems="center">
                <IconButton as={Link} to="/">
                  <ArrowBackIcon width="32px" />
                </IconButton>
              </Flex>
              <Flex flex={1} justifyContent="center" alignItems="center">
                <PoolName>{currentSpecialPoolConfig.name}</PoolName>
              </Flex>
              <Flex flex={1} justifyContent="flex-end" alignItems="center">
                <Text textAlign="right" fontSize="14px" color="#FFB800">
                  {currentSpecialPoolConfig.description}
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <Heading as="h1" scale="xxl" color="white" fontFamily="HK Grotesk" mt="16px">
                {t('Cap Goals')}: ${formatNumber(currentSpecialPoolConfig.capGoal, 0, 2)}
              </Heading>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>{t('Cap Goals raised')}</Text>
              <Text>60%</Text>
            </Flex>
            <Slider
              min={0}
              max={currentSpecialPoolConfig.capGoal}
              value={(currentSpecialPoolConfig.capGoal * 60) / 100}
              onValueChanged={() => null}
              name="stake"
              // valueLabel={`${60}%`}
              step={1}
            />
          </CardSpecialPoolHeader>
          <CardSpecialPoolBody>
            <Flex justifyContent="flex-start">
              <Text fontSize="16px">
                {t('The pool allowcated stake by DEFIY 60%; Group BUSD, WBNB, BTCB, ETH, CAKE: 40%')}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Flex flexDirection="column">
                <Heading scale="xxl" color="white" fontFamily="HK Grotesk" mt="16px" bold>
                  {t('Start staking')}
                </Heading>
                <Heading as="h2" scale="xl" color="four" fontFamily="HK Grotesk" mb="16px">
                  {t('0.00')}
                </Heading>
              </Flex>
              <Flex>
                <Text color="white" fontFamily="HK Grotesk" mt="16px">
                  {t('Start staking')}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <GroupChildrenPools currentSpecialPoolConfig={currentSpecialPoolConfig} />
              <StakeInfoWrap flex={1}>
                <Heading>{t('DEFIY Earned')}</Heading>
                <Heading color="four">{t('0.00 ~ $0.00')}</Heading>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('DEFIY Staked')}</Text>
                </Flex>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('BUSD Staked')}</Text>
                </Flex>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('WBNB Staked')}</Text>
                </Flex>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('BTCB Staked')}</Text>
                </Flex>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('WETH Staked')}</Text>
                </Flex>
                <Flex mt="16px">
                  <Text mr="16px">0.00</Text>
                  <Text color="four"> {t('CAKE Staked')}</Text>
                </Flex>
              </StakeInfoWrap>
            </Flex>
            <Flex justifyContent="center" mt="16px" mb="16px">
              {!account ? <ConnectWalletButton /> : null}
            </Flex>
          </CardSpecialPoolBody>
        </CardSpecialPool>
      </ContainerWrap>
    </MainBackground>
  )
}

export default DetailSpecialPool
