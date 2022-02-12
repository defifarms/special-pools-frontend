import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BaseLayout, Button, Card, CardBody, Heading } from '@defifarms/special-uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsPoolWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useCountDownTimer from 'hooks/useCountDownTimer'
import getTimePeriods from 'utils/getTimePeriods'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import UnlockButton from '../../../components/UnlockButton'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
  grid-column: span 6;
  width: 100%;
  background: radial-gradient(99.83% 99.83% at 42.32% 47.12%, #ffffff 11.98%, #d4d8f3 97.92%);
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: span 8;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: span 8;
  }
`

const CardBodyStyle = styled(CardBody)`
  padding: 23px 18px 30px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 28px 38px 42px;
  }
`
const Block = styled.div``

const CardImage = styled.img`
  margin-bottom: 25px;
  border-radius: 20px;
  width: 100%;
`

const Label = styled.div`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 27.8455px;
  line-height: 32px;
  color: #0f0b5f;
`

const Actions = styled.div`
  margin-top: 24px;
  font-family: HK Grotesk;
`

const HeadingStakingCard = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 36px;
  line-height: 55px;
  color: #0f0b5f;
  margin-bottom: 13px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 48px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  grid-gap: 0;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  flex-wrap: wrap;
  & > div {
    grid-column: span 6;
  }
`

const StyledButtonMenu = styled(Button)`
  font-weight: 600;
  font-size: 18px;
  line-height: 52px;
  height: 52px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 80px;
    font-size: 32.9627px;
  }
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsPoolWithBalance = useFarmsPoolWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValueFarms = farmsPoolWithBalance.farmsWithStakedBalance.filter((balanceType) => balanceType.balance.gt(0))
  // const balancesWithValuePools = farmsPoolWithBalance.pool.filter((balanceType) => balanceType.balance.gt(0))
  const [timeHarvestRemaining, setTimeHarvestRemaining, isFinish] = useCountDownTimer()

  useEffect(() => {
    setTimeHarvestRemaining(Math.max(farmsPoolWithBalance.earningsSum - new Date().getTime(), 0))
  }, [farmsPoolWithBalance.earningsSum, setTimeHarvestRemaining])

  const harvestAll = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValueFarms) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }

    // eslint-disable-next-line no-restricted-syntax
    // for (const poolWithBalance of balancesWithValuePools) {
    //   try {
    //     // eslint-disable-next-line no-await-in-loop
    //     await harvestFarm(masterChefContract, poolWithBalance.sousId)
    //   } catch (error) {
    //     toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
    //   }
    // }

    setPendingTx(false)
  }, [balancesWithValueFarms, masterChefContract, toastError, t])

  const getTimeRemainingText = (time) => {
    const { hours, minutes, seconds } = getTimePeriods(time / 1000)
    if (time <= 0) {
      return ''
    }
    return t(' %hour%h : %minute%m : %second%s', {
      hour: hours,
      minute: minutes,
      second: Math.round(seconds),
    })
  }

  // const isDisableHarvest = !pendingTx && !isFinish

  return (
    <StyledFarmStakingCard>
      <CardBodyStyle>
        <HeadingStakingCard scale="xl" mb="24px">
          {t('Farms & Staking')}
        </HeadingStakingCard>
        <CardImage src="/images/home/farm-staking.jpg" />
        <Cards>
          <Block>
            <Label>{t('LOOPS to Harvest')}:</Label>
            <CakeHarvestBalance farmsWithBalance={balancesWithValueFarms} poolsWithBalance={[]} />
          </Block>
          <Block>
            <Label>{t('LOOPS in Wallet')}:</Label>
            <CakeWalletBalance />
          </Block>
        </Cards>
        <Actions>
          {account ? (
            <StyledButtonMenu
              id="harvest-all"
              disabled={!pendingTx && !isFinish}
              onClick={harvestAll}
              width="100%"
              borderRadius="98px"
            >
              {pendingTx
                ? t('Collecting LOOPS')
                : t('Harvest all', {
                    count: balancesWithValueFarms.length,
                  })}
              {getTimeRemainingText(timeHarvestRemaining)}
            </StyledButtonMenu>
          ) : (
            <UnlockButton fontSize="24" width="100%" borderRadius="98px" />
          )}
        </Actions>
      </CardBodyStyle>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
