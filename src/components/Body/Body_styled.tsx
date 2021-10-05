import styled from "styled-components";
import { theme } from "../../theme";


const BodyStyled = styled.div `
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 720px));
    grid-template-rows: repeat(3, 600px);
    margin-top: -5px;
    /* section {
        border: 1px red solid;
    } */

    section:nth-child(1),section:nth-child(4) {
        padding: 100px 90px 60px 60px;
        color: rgb(20, 20, 20);
        a {
            text-decoration: none;
        }
        h2 {
            font-family: "Fraunces", serif;
            font-size: 45px;
        }
        p:nth-child(2) {
            font-family: "Barlow", sans-serif;
            line-height: 24px;
            font-size: 15px;
            font-weight: bold;
            color: rgb(117, 117, 117);
        }
        p:nth-child(3) {
            a {
                font-family: "Fraunces", serif;
                cursor: pointer;
                font-size: 18px;
                padding-top: 30px;
                text-decoration: underline;
                transition-property: "text-decoration";
                transition-duration: 0.5s;
                text-transform: uppercase;
                color: rgb(20, 20, 20);
            }   

            a:hover {
                text-decoration: underline;
                text-decoration-color: yellow;
                text-decoration-thickness: 4px;
            }
        }
    }

    section:nth-child(2), section:nth-child(3) {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    section:nth-child(2) {
        background-image: url("/images/desktop/image-transform.jpg");
    }


    section:nth-child(3) {
        background-image: url("/images/desktop/image-stand-out.jpg");
    }

    section:nth-child(5), section:nth-child(6) {
        position: relative;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        h2 {
            width: 100%;
            position: absolute;
            top: 60%;
            text-align: center;
            font-family: "Fraunces", serif;
            color: rgb(75, 74, 77);
        }

        p {
            text-align: center;
            width: 60%;
            position: absolute;
            top: 70%;
            font-family: "Barlow", sans-serif;
            font-weight: 700;
            margin-left: 21%;
            line-height: 25px;
            font-size: 15px;
            color: ${theme.lightGrey};
        }
    }

    section:nth-child(5) {
        background-image: url("/images/desktop/image-graphic-design.jpg");
    }

    section:nth-child(6) {
        background-image: url("/images/desktop/image-photography.jpg");
    }


    @media (max-width: ${theme.mobile}) {
        grid-template-columns: repeat(1, minmax(200px, 375px));
        /* grid-template-rows: repeat(6, minmax(200px,375px)); */
        grid-template-rows: 375px 500px 375px 500px 600px 600px;
        
        section:nth-child(1), section:nth-child(4) {
            padding: 15px 60px 0px 60px;
            text-align: center;

        }

        
        section:nth-child(2) {
            grid-row: 1;
            background-image: url("/images/mobile/image-transform.jpg");
        }

        section:nth-child(3) {
            background-image: url("/images/mobile/image-stand-out.jpg");
        }

        section:nth-child(5) {
            background-image: url("/images/mobile/image-graphic-design.jpg");
            background-position: center ;
        }
        
        section:nth-child(6) {
            background-image: url("/images/mobile/image-photography.jpg");
        }

        
        
    }
`

export default BodyStyled;