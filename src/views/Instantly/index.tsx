import { MainBackground } from 'components/Layout/MainBackground'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Page from '../Page'

export default function Swap({ history }: RouteComponentProps) {
  return (
    <MainBackground>
      <Page>
        <iframe
          title="test"
          src="https://changelly.com/static/payment-button-widget/index.html?paymentButtonTheme=default&buttonTextId=003&widgetLink=https%3A%2F%2Fwidget.changelly.com%3Ffrom%3D*%26to%3D*%26amount%3D1%26address%3D%26fromDefault%3Dbtc%26toDefault%3Deth%26theme%3Ddefault%26merchant_id%3DFu7sQORI9k4GxzXE%26payment_id%3D%26v%3D3&isPopUp=true&tickerId=008"
          width="220"
          height="56"
          frameBorder="0"
          style={{ borderRadius: '4px' }}
        />
        <div id="changellyModal" style={{ height: 'calc(100vh - 88px)' }} />
      </Page>
    </MainBackground>
  )
}
