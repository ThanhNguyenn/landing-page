import { theme } from "../../theme";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Header from ".";

interface Props  {
    open: boolean;
}


const HeaderStyled = styled.div<Props> `
    background-color: ${theme.primaryBlue};
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        display: none;
        &focus {
            outline: none;
        }

        div {
            width: 2rem;
            height: 0.2rem;
            background: white;
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        }
    }


    li, a,button {
        font-family: ${theme.primaryBarlowFont};
        font-size: 16px;
        text-decoration: none;
        color:  ${theme.primaryWhite};
        padding: 24px 3%;
    }
    button {
            padding: 15px 20px;
            background-color: rgb(115, 205, 255, 1);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            font-family: ${theme.primaryFrauncesFont};
            font-weight: 900;
            font-size: 18;
        }
        button:hover {
            background-color: ${theme.darkBlue};
        }

    img {
        cursor: pointer;
        margin-right:auto;
    }

    ul {
        list-style: none;

        li {
            display: inline-block;
            padding: 0px 25px;
        
        a {
            transition: all 0.3s ease;
        }
        
        a:hover {
            color: ${theme.darkBlue};
        }
        }
    }

    @media (max-width: ${theme.mobile}) {
        div {
            div:nth-child(1) {
                transform: ${({open}) => open ? 'rotate(33deg)' : 'rotate(0)'};
            }

            div:nth-child(2) {
                opacity: ${({open}) => open ? '0' : '1'};
                transform: ${({open}) => open ? 'translateX(20px)' : 'translate(0)'};
            }
            
            div:nth-child(3) {
                transform: ${({open}) => open? 'rotate(-33deg)' :'rotate(0)'};
            }
        }


        padding: 24px 8%;
        div {
            display: block;
            div {
                margin-top: 5px;
            }
        }


        ul {
            overflow: hidden;
            z-index: 20;
            position: absolute;
            background-color: white;
            top: 6%;
            width: 80%;
            height: 25%;
            right: 10%;
            display: flex; 
            flex-direction: column;
            padding: 0px;
            align-items: center;
            justify-content: space-around;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(120%)'};
            li {
                padding: 0px;

                /* a{
                    transition: all 0.3s ease;
                }

                a:hover {
                    font-weight: bold;
                } */
            }

            li, a {
                color: #8a8a8a;
                font-weight: bold;
            }

            button {
                background-color: ${theme.brightYellow};
                color: black;
            }
        }
    }
`

export default HeaderStyled;