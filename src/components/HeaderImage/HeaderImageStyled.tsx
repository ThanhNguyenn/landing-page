import { theme } from "../../theme";
import styled from 'styled-components';


const HeaderImageStyled = styled.div `
    position: relative; 
    text-align: center;
    color: white;

    img:nth-child(1) {
        width: 100%;
        object-fit: contain;
        margin-left: auto;
        margin-right: auto;
    }

    img:nth-child(3) {
        position: absolute;
        top: 35%;
        left: 48.5%;
    }

    div {
        width: 100%;
        position: absolute;
        top: 20%;
        font-size: 47px;
        font-family: "Fraunces", serif;
    }

    @media (max-width: ${theme.mobile}) {
        div {
            font-size: 30px;
        }

        img:nth-child(3) {
            width: 4%;
            top: 40%;
        }
    }
`


export default HeaderImageStyled;