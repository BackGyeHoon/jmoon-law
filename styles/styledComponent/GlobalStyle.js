import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import customReset from '../commons/_reset.scss'

const GlobalStyle = createGlobalStyle `
    ${reset}
    ${customReset}
`

export default GlobalStyle