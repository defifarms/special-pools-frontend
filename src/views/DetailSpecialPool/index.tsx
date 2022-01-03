import {
  ArrowBackIcon,
  Card,
  Flex,
  Heading,
  IconButton,
  Slider,
  Text,
  useMatchBreakpoints
} from '@defifarms/special-uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { MainBackground } from 'components/Layout/MainBackground'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { usePollFarmsPublicData } from 'state/farms/hooks'
import { useFetchCakeVault, useFetchPublicPoolsData, useFetchUserPools, useSpecialPools } from 'state/pools/hooks'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { formatNumber } from 'utils/formatBalance'
import { SpecialPoolsConfig } from '../../config/constants/specialPoolConfig'
import GroupChildrenPools from './components/GroupChildrenPools'
import GroupStakeInfo from './components/GroupStakeInfo'
import Apr from './components/PoolsTable/Apr'


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
  padding: 16px;
  justify-content: center;
  flex-direction: column;
`

const PoolName = styled.div`
  background: #d52b88;
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
  white-space: nowrap;
`
const HeadingPool = styled(Text)`
  font-weight: bold;
  white-space: nowrap;
`
const SliderStyled = styled(Slider)`
  & > div:nth-of-type(1) {
    left: 0;
    width: 100%;
  }
  & > div > div:nth-of-type(1) {
    background: #5523b0;
  }
`

const DetailSpecialPool: React.FC<RouteComponentProps<{ groupPool: string }>> = ({
  history,
  match: {
    params: { groupPool },
  },
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { pools: poolsWithoutAutoVault, userDataLoaded } = useSpecialPools()
  usePollFarmsPublicData()
  useFetchCakeVault()
  useFetchPublicPoolsData()
  useFetchUserPools(account)

  const currentSpecialPoolConfig = SpecialPoolsConfig.find((pool) => pool.link === groupPool)
  const poolsSpecial = poolsWithoutAutoVault.filter((pool) => {
    const arraySpecialPoolConfig = currentSpecialPoolConfig.childrenPools
    let isSpecialPools = false
    arraySpecialPoolConfig.forEach((spoolConfig) => {
      if (spoolConfig.sousId === pool.sousId) {
        isSpecialPools = true
      }
    })
    return isSpecialPools
  })
  const defiyPools = poolsSpecial[0] || null
  const stakedBalance = defiyPools && defiyPools?.userData?.stakedBalance ? new BigNumber(defiyPools.userData.stakedBalance) : BIG_ZERO



  // -----------------------
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl

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
                <Text textAlign="right" fontSize={isLargerScreen ? '14px' : '10px'} color="#FFB800" display='inline-flex'>
                  APR 
                  <Apr pool={defiyPools} stakedBalance={stakedBalance} showIcon={false} />
                  {currentSpecialPoolConfig.description}
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <HeadingPool color="white" fontFamily="HK Grotesk" mt="16px" fontSize={isLargerScreen ? '50px' : '30px'}>
                {t('Cap Goals')}: ${formatNumber(currentSpecialPoolConfig.capGoal, 0, 2)}
              </HeadingPool>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>{t('Cap Goals raised')}</Text>
              <Text>60%</Text>
            </Flex>
            <SliderStyled
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
            <Flex justifyContent="space-between" flexDirection={isLargerScreen ? 'row' : 'column'}>
              <Flex flexDirection="column">
                <HeadingPool
                  color="white"
                  fontFamily="HK Grotesk"
                  fontSize={isLargerScreen ? '48px' : '32px'}
                  mt="16px"
                  bold
                >
                  {t('Start staking')}
                </HeadingPool>
                <Heading as="h2" scale="xl" color="four" fontFamily="HK Grotesk" mb="16px">
                  {t('0.00')}
                </Heading>
              </Flex>
              <Flex flexDirection="column">
                <Flex justifyContent="space-between">
                  <Text fontSize="18px" color="white" fontFamily="HK Grotesk" mt="16px">
                    {t('Rewards end in: ')}
                  </Text>
                  <Text fontSize="18px" ml="16px" color="four" fontFamily="HK Grotesk" mt="16px">
                    {t('3,595, 482 Blocks')}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text fontSize="18px" color="white" fontFamily="HK Grotesk" mt="16px">
                    {t('Unstake Fee')}
                  </Text>
                  <Text fontSize="18px" color="four" fontFamily="HK Grotesk" mt="16px">
                    {t('0%')}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection={isLargerScreen ? 'row' : 'column'}>
              <GroupChildrenPools
                poolsSpecial={poolsSpecial}
                userDataLoaded={userDataLoaded}
                currentSpecialPoolConfig={currentSpecialPoolConfig}
              />
              <GroupStakeInfo
                poolsSpecial={poolsSpecial}
                userDataLoaded={userDataLoaded}
                currentSpecialPoolConfig={currentSpecialPoolConfig}
              />
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
