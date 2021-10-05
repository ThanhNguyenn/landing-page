import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import { theme } from './theme';
const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`
export default GlobalStyle;