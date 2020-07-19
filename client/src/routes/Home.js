import React, { useState } from 'react';
import '../stylesheets/Home.scss';


//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

// importing product list from db
// import products from '';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "mens"
        }
    }

    render() {
        return (
            <div className="content-wrap">
                <Banner />
                <section className="featured-collections">
                    <header>
                        <h3 className="sub-heading">NEW ARRIVALS</h3>
                        <div className="tab-button-container">
                            <button className={this.state.activeSection === 'mens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({ activeSection: "mens" })}>MENS</button>
                            <button className={this.state.activeSection === 'womens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({ activeSection: "womens" })}>WOMENS</button>
                        </div>
                    </header>
                    {/* Render product list from db and map through to display images */}
                    {/* {products.map(item => (
                        <Image
                            item={item}
                        />
                    ))} */}
                </section>
            </div>
        );
    }
}

export default Home;