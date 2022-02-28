import React, { useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { Text, Flex, Checkbox, Button } from '@loopstarter/special-uikit'
import styled from 'styled-components'

const CheckboxStyled = styled(Checkbox)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

interface AcknowledgementProps {
  handleContinueClick: () => void
}

const Acknowledgement: React.FC<AcknowledgementProps> = ({ handleContinueClick }) => {
  const { t } = useTranslation()
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <CheckboxStyled
            name="confirmed"
            type="checkbox"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
            scale="sm"
          />
          <Text ml="10px" style={{ userSelect: 'none' }}>
            {t('I understand')}
          </Text>
        </Flex>

        <Button disabled={!isConfirmed} onClick={handleContinueClick}>
          {t('Continue')}
        </Button>
      </Flex>
    </>
  )
}

export default Acknowledgement
