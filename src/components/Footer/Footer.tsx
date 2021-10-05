import React from 'react'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FooterStyled from './FooterStyled';


const Footer = () => {
    return (
        <FooterStyled>
            <img src="/images/logo.svg" alt="footer_logo" />
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div>
                <li><FontAwesomeIcon  icon={faFacebook} /></li>
                <li><FontAwesomeIcon  icon={faInstagram} /></li>
                <li><FontAwesomeIcon  icon={faTwitter} /></li>
                <li><FontAwesomeIcon  icon={faPinterest} /></li>
            </div>
        </FooterStyled>
    )
}

export default Footer;