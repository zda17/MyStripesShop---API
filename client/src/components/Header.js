import React, { Fragment } from 'react';
import '../stylesheets/Header.scss';

const Header = (props) => {

    const { title, divClass, headerClass, hClass } = props

    return(
        <header className={headerClass}>
            <div className={divClass}>
                <h2 className={hClass} align="center">
                    {title}
                </h2>
            </div>
        </header>
    );
};

export default Header;
