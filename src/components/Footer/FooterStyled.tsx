import { theme } from "../../theme";
import styled from 'styled-components';

const FooterStyled = styled.div `
    background-color: ${theme.primaryGreen};
    padding-top: 20px;
    padding-bottom: 50px;
    font-family: ${theme.primaryBarlowFont};
    font-weight: bold;
    img {
        display: block;
        margin-left: auto;
        margin-right:auto;
        margin-top: 40px;
        filter: #3b524d;
        filter: invert(75%) sepia(11%) saturate(946%) hue-rotate(117deg)
    brightness(91%) contrast(85%);

    }    

    ul {
        list-style: none;
        text-align: center;
        margin-top: 40px;
        padding-right: 10px;

        li {

            display: inline-block;
            padding: 0px 20px;
            a {
                color: ${theme.DarkGreen};
                text-decoration: none;
                transition: all 0.3s ease 0s;
            }

            a:hover {
                color: white;
            }
        }
    }

    div {
        margin-top: 50px;
        text-align: center;
        list-style: none;
        color: rgba(47, 120, 103, 255);
        li {
            display: inline-block;
            padding: 0px 10px;
            transition: all 0.3s ease 0s;
            cursor: pointer;
        }

        li:hover {
           color: white;
        }
        
    }

    @media (max-width: ${theme.mobile}) {
        ul {
            padding: 10px;
        }
    }
`

export default FooterStyled;