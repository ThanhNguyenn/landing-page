import React, {useState} from 'react'
import HeaderStyled from './Header_styled';
import {RootState} from '../../app/store';
import { useSelector, useDispatch } from 'react-redux'
import {isclicked} from '../../features/Burger/BurgerSlice'

interface Props {
    open: boolean;
}


const Header = () => {
    // const [open,setOpen] = useState(false);
    const burger = useSelector((state:RootState) => state.burger.value);
    const dispatch = useDispatch();
    
    
    return (
        <HeaderStyled open={burger}>
            <img src="/images/logo.svg" alt="sunnyside_logo" />
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
                <li><button>CONTACT</button>  </li>
            </ul>
            <div onClick={() => dispatch(isclicked())}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </HeaderStyled>
    )
}



export default Header; 
