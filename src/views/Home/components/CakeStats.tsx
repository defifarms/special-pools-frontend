import React from 'react'
import { Card, CardBody, Heading, Skeleton, Text, ArrowRightIcon, Flex } from '@loopstarter/special-uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useBurnedBalance, useTotalSupply, useMaxTransferAmount } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getLoopsAddress } from 'utils/addressHelpers'
import { formatEther } from 'ethers/lib/utils'
import CardValue from './CardValue'
import { usePriceCakeBusd } from '../../../state/farms/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background: #722dee;
  opacity: 0.9;
  backdrop-filter: blur(200px);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 384px;
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 15px;
`

const HeadingCard = styled(Heading)`
  font-style: normal;
  line-height: 54px;
  letter-spacing: 0em;
  padding-bottom: 4px;
  font-family: HK Grotesk Bold;
`

const StyleCircle = styled.div`
  width: 468px;
  height: 468px;
  border-radius: 50%;
  background: rgba(150, 91, 255, 0.5);
  opacity: 0.9;
  backdrop-filter: blur(100px);
  position: absolute;
  right: -38px;
  top: unset;
  z-index: -1;
  ${({ theme }) => theme.mediaQueries.lg} {
    top: 45px;
  }
}
`

const IconWrapper = styled.div`
  width: 438px;
`

const CardImage = styled.img`
  bottom: 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    position: absolute;
  }
`

const StyleText = styled(Text)`
  font-style: normal;
  font-family: ${({ bold }) => (bold ? 'HK Grotesk Bold' : 'HK Grotesk')};
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  padding-left: 23px;
`

const StyleCardBody = styled(CardBody)`
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 50%;
  }
`
const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getLoopsAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const totalMinted = totalSupply ? getBalanceNumber(totalSupply) : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())
  const maxTransferAmount = useMaxTransferAmount()
  // const totalLockedRewards = 0
  let maxTransfer = 0

  if (maxTransferAmount) {
    maxTransfer = parseInt(formatEther(maxTransferAmount.toString()))
  }

  return (
    <StyledCakeStats>
      <StyleCardBody>
        <HeadingCard color="#fff" scale="xl" mb="8px">
          {t('LOOPS Stats')}
        </HeadingCard>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('Market Cap')}</StyleText>
          </Flex>
          {mcap?.gt(0) && mcapString ? (
            <StyleText bold>{t('$%marketCap%', { marketCap: mcapString })}</StyleText>
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
        </Row>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('Total Minted')}</StyleText>
          </Flex>
          <CardValue decimals={3} value={totalMinted} />
        </Row>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('Total Burned')}</StyleText>
          </Flex>
          <CardValue decimals={0} value={burnedBalance} />
        </Row>
        {/* <Row> */}
        {/*  <Text fontSize="14px">{t('Total Locked Rewards')}</Text> */}
        {/*  <CardValue fontSize="14px" decimals={0} value={totalLockedRewards} /> */}
        {/* </Row> */}
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('Circulating Supply')}</StyleText>
          </Flex>
          <CardValue decimals={0} value={cakeSupply} />
        </Row>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('Max Tx Amount')}</StyleText>
          </Flex>
          <CardValue decimals={0} value={maxTransfer} />
        </Row>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <StyleText>{t('New LOOPS/Block')}</StyleText>
          </Flex>
          <StyleText bold>0.01</StyleText>
        </Row>
        <Row>
          <Flex>
            <ArrowRightIcon color="none" />
            <div style={{}}>
              <StyleText>{t('Transfer Tax')} </StyleText>
            </div>
          </Flex>
          <StyleText bold>8%</StyleText>
        </Row>
      </StyleCardBody>
      <IconWrapper>
        <StyleCircle />
        <CardImage src="/images/home/4.webp" />
      </IconWrapper>
    </StyledCakeStats>
  )
}

export default CakeStats
