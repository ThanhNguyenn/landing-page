import React from 'react'
import HeaderImageStyled from './HeaderImageStyled';


const HeaderImage = () => {
    return (
        <HeaderImageStyled>
            <img src="./images/desktop/image-header.jpg" alt="image-header"/>
            <div>WE ARE CREATIVES</div>
            <img src="./images/icon-arrow-down.svg" alt="icon-arrow-down"/>
        </HeaderImageStyled>
    )
}


export default HeaderImage;

