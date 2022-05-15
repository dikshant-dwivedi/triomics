import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body{
        font-family: Roboto;
        box-sizing: border-box;
        //background: ${({ theme }) => theme.bodyBg};
    }
`