import React from 'react';

import { BannerSlim } from '../components/Banner';
import ShopPage from '../components/ShopPage';

function ShowAll() {
    return (
        <div className="ShopPage" >
            <BannerSlim />
            <ShopPage path='all' />
        </div>
    );
}

export default ShowAll;