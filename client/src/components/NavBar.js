import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../utils/Context';
import { stack as Menu } from 'react-burger-menu';
import logo from '../utils/images/logo.png';
import cart from '../utils/images/cart.png';
import insta from '../utils/images/insta.png';
import '../stylesheets/Burger.scss';
import '../stylesheets/NavBar.scss';

// Instagram icon for bottom of side menu
const Icon = () => {
    return (
        <>
            <hr className='line'></hr>
            <div className='insta'>
                <Link to='#'><img className='insta-icon' src={insta} alt='Instagram' /></Link>
            </div>
        </>
    )
}

// Burger and side menu
const BurgerMenu = () => {
    const { menuOpenState, setMenuOpenState, stateChangeHandler } = useContext(MyContext);
    return (
        <Menu
            right
            noOverlay
            disableAutoFocus
            width={280}
            height={'100vh'}
            isOpen={menuOpenState}
            onClose={() => setMenuOpenState(false)}
            onStateChange={(state) => stateChangeHandler(state)}
        >
            <Link id='shop' to='/ShowAll'>SHOP</Link>
            <Link id='about' to='/About'>ABOUT</Link>
            <Link id='contact' to='/Contact'>CONTACT</Link>
            <Icon />
        </Menu>
    )
};

// Non-burger top menu
const NoBurger = () => {
    return (
        <>
            <div className='nav-item-wrapper'>
                <ul className='top-menu'>
                    <li><Link id='shop' to='/ShowAll'>SHOP</Link></li>
                    <li><Link id='about' to='/About'>ABOUT</Link></li>
                    <li><Link id='contact' to='/Contact'>CONTACT</Link></li>
                </ul>
            </div>
        </>
    )
}

// Navbar
const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <>
            {windowWidth <= 799 &&
                <BurgerMenu />
            }
            <nav>
                <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
                {windowWidth >= 800 && <NoBurger />}
                <Link to='/Cart'><img className='cart' style={{ right: windowWidth >= 800 ? '24px' : '84px' }} src={cart} alt='cart' /></Link>
                <div className='tagline'>
                    <h4>COMMUNITY CONSCIOUS CLOTHING</h4>
                </div>
            </nav>
        </>
    )
}

export default NavBar;