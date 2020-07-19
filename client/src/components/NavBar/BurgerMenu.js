import React, { useContext } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { MyContext } from '../../utils/Context';
import '../../stylesheets/Burger.scss';
import Icon from './Icon';

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

export default BurgerMenu;