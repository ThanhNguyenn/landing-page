import { theme } from "../../theme";
import styled from 'styled-components';



export const ClientFeedBackStyled = styled.div`
    font-family: ${theme.primaryFrauncesFont};
    padding-bottom: 100px;
    
    h3 {
        font-size: 25px;
        text-align: center;
        margin-top: 120px;
        color: rgb(161, 158, 157);
        letter-spacing: 8px;
        text-transform: uppercase;
    }

    @media (max-width: 375px) {
        padding-bottom: 20px;

        h3 {
            font-size: 16px;
        }
    }
`


export const ClientProfilesStyled = styled.div `
        display: flex; 
        justify-content: center;
        padding: 0px 200px;
        margin-top: 100px;
        column-gap: 50px;

        @media (max-width: 375px) {
            flex-direction: column;
            padding: 0;
            column-gap: 0;
            justify-content: space-around;
        }
`

export const ClientProfileStyled = styled.div `
    text-align: center;

    img {
        display: block;
        margin: auto;
        width: 35%;
        border-radius: 50%;
    }

    p:nth-child(2) {
        font-family: ${theme.primaryBarlowFont};
        font-weight: 600;
        color: rgb(145, 145, 145);
        line-height: 22px;
        padding-top: 30px;
    }

    p:nth-child(3) {
        margin-top: 40px;
        font-weight: 900;
        font-size: 20px;
    }

    p:nth-child(4) {
        color: rgb(145, 145, 145);
        font-size: 14px;
        font-family: ${theme.primaryBarlowFont};
        font-weight: bold;
    }

    @media (max-width: ${theme.mobile}) {
        img {
            width: 20%;
        }

        p:nth-child(2) {
            padding: 0px 30px;
        }

        p:nth-child(3) {
            margin-top: 0px;
        }

        p:nth-child(4) {
            margin-top: -10px;
            margin-bottom: 80px;
        } 
    }
`