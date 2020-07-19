import React from 'react';


//components
import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';


import Image from '../components/Image';

const Home = () => {
    return(
        <>
        <div id="content-wrap">
         <Header 
            title="COMMUNITY CONSCIOUS CLOTHING" 
            headerClass="Main-Header"
            divClass="Container-Header"
            hClass="Title-Header"
            subHClass="No-Sub"
            /> {/*header with custom title and no sub heading*/}
          <ProductDescription />
        </div>
        </>
    );
};

export default Home;