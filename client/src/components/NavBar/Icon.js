import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../../utils/images/insta.png';
import '../../stylesheets/Burger.scss';

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

export default Icon;