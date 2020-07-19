import React, { useContext } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { MyContext } from '../../utils/Context';
import '../../stylesheets/NavBar.scss';
import logo from '../../utils/images/logo.jpg';
import cart from '../../utils/images/cart.png';

import BurgerMenu from './BurgerMenu';


const NavBar = () =>  {

    return (
        <>
            <BurgerMenu />
            <nav>
                <img className='logo' src={logo} alt='logo'/>
                <Link to='/Cart'><img className='cart' src={cart} alt='cart'/></Link>
                <div className='tagline'>
                    <h4>COMMUNITY CONSCIOUS CLOTHING</h4>
                </div>
            </nav>
        </> 
    )
}

export default NavBar;