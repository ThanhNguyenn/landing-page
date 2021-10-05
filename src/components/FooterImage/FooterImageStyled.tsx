import { theme } from "../../theme";
import styled from 'styled-components';


const FooterImageStyled = styled.div `

    display: grid;
    grid-template-columns: repeat(4, minmax(280px, 360px));
    grid-template-rows: 450px;

    div:nth-child(1), div:nth-child(2), div:nth-child(3), div:nth-child(4) {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }


    div:nth-child(1) {
        background-image: url("/images/desktop/image-gallery-milkbottles.jpg");
    }
    
    div:nth-child(2) {
        background-image: url("/images/desktop/image-gallery-orange.jpg");
    }

    div:nth-child(3) {
        background-image: url("/images/desktop/image-gallery-cone.jpg");
    }

    div:nth-child(4) {
        background-image: url("/images/desktop/image-gallery-sugarcubes.jpg");
    }

    @media (max-width: 375px) {

        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,minmax(187px,150px));

        div:nth-child(1) {
            background-image: url("/images/mobile/image-gallery-milkbottles.jpg");
        }

        div:nth-child(2) {
            background-image: url("/images/mobile/image-gallery-orange.jpg");
        }

        div:nth-child(3) {
        background-image: url("/images/mobile/image-gallery-cone.jpg");
        }

        div:nth-child(4) {
            background-image: url("/images/desktop/image-gallery-sugarcubes.jpg");
    }

    }

`

export default FooterImageStyled;