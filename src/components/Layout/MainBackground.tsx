import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'

const MainBackgroundStyled = styled.div`
  background-image: url(images/home/main-background.webp);
  background-size: cover;
  background-color: rgba(0, 0, 0, ${({ theme }) => (theme.isDark ? '0.0' : '0.0')});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: top center;
  height: calc(100vh - 88px); // Subtract header height
  overflow-y: scroll;
  position: relative;
`
const MainBackgroundMask = styled.div`
  background: linear-gradient(
    183.13deg,
    rgba(112, 44, 166, 0.3) 2.59%,
    rgba(96, 45, 178, 0.0854605) 33.17%,
    rgba(90, 45, 182, 0) 63.36%,
    rgba(90, 45, 182, 0) 63.36%
  );
  height: 50%;
  width: 100%;
  backdrop-filter: blur(4px);
`

export const MainBackground = ({ children }) => {
  return (
    <MainBackgroundStyled>
      <MainBackgroundMask>{children}</MainBackgroundMask>
    </MainBackgroundStyled>
  )
}
