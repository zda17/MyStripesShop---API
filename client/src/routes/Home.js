import React, { Fragment } from 'react';
import '../stylesheets/Home.scss';

//components
import AText from "../components/AText";
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home = () => {
    return(
        <main>
            <Header 
                title="Welcome to My Stripes!" 
                headerClass="Title-Header"
                divClass="Container-Header"
                hClass="Text-Header"
            /> {/*header with custom title*/}
            <Banner />
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">NEW ARRIVALS</h3>
                    <div className="tab-button-container">
                        <button className="tab-item is-active">MENS</button>
                        <button className="tab-item">WOMENS</button>
                    </div>
                </header>
            </section>
        </main>
    );
};

export default Home;