import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@loopstarter/special-uikit/dist/theme'
import HKGrotesk from '../fonts/HKGrotesk-Medium.otf'
import HKGroteskBold from '../fonts/HKGrotesk-Bold.otf'
import HKGroteskLight from '../fonts/HKGrotesk-Light.otf'

declare module '*.otf'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: HK Grotesk;
    src: url(${HKGrotesk});
  }

  @font-face {
    font-family: HK Grotesk Bold;
    src: url(${HKGroteskBold});
  }

  @font-face {
    font-family: HK Grotesk Light;
    src: url(${HKGroteskLight});
  }
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .recharts-layer recharts-cartesian-axis-tick {
    color: #fff;
  }
  #changellyModal {
    height: calc(100vh - 88px);
  }
`

export default GlobalStyle
