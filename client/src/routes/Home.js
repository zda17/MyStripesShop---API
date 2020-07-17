import React, { Fragment } from 'react';

//components
import AText from "../components/AText";
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home = () => {
    return(
        <>
        <Header 
            title="Welcome to My Stripes!" 
            headerClass="Title-Header"
            divClass="Container-Header"
            hClass="Text-Header"
        /> {/*header with custom title*/}
        <Banner />
        </>
    );
};

export default Home;