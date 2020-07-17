import React from 'react';

//components
import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';
import ProductForm from '../components/ProductForm';

const Home = () => {
    return(
        <>
        <Header 
            title="Welcome to My Stripes!" 
            headerClass="Main-Header"
            divClass="Container-Header"
            hClass="Title-Header"
            subHClass="No-Sub"
        /> {/*header with custom title and no sub heading*/}
        <ProductDescription />
        <ProductForm defaultColor="Blue"/>
        </>
    );
};

export default Home;