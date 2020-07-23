import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../utils/Context';
import { stack as Menu } from 'react-burger-menu';
import logo from '../utils/images/logo.png';
import insta from '../utils/images/insta.png';
import '../stylesheets/Burger.scss';
import '../stylesheets/NavBar.scss';
import Cart from '../components/Cart';


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

// Navbar
const NavBar = () => {
    return (
        <>
            <BurgerMenu />
            <nav>
                <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
                <Cart/>
                <div className='tagline'>
                    <h4>COMMUNITY CONSCIOUS CLOTHING</h4>
                </div>
            </nav>
        </>
    )
}

export default NavBar;