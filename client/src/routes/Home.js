import React from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';

// Axios
import axios from '../utils/axios';

//components
import Header from '../components/Header';
import { Banner } from '../components/Banner';
import ShopSection from '../components/ShopSection';

function Home() {

    return (
        <div className="content-wrap" >
            <Banner />
            <ShopSection path='all' />
        </div>
    );
}

export default Home;