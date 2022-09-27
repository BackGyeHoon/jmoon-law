import { ThemeProvider } from 'styled-components'

import theme from '../styles/styledComponent/Theme'

import '../styles/commons/_reset.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
