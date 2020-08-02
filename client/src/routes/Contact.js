import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Contact = () => {
    return(
        <div className="mainContact">
            <h1>Contact Us</h1>
            <div className="contactInfo">
                
                <h4>My Stripes Customer Service</h4>
                <p>Email: none@non.com</p>
                <p>Phone: (555)-555-5555</p>
                <p>In order for our staff to provide the quickest response time, we will not be holding phone hours for customer service. Please reach out via email with any questions.</p>
                <h4>Phone Hours of Operations:</h4>
                <p>Monday - Thursday 7:00am - 5:00pm Pacific Time</p>
                <h4>Hg Ten Marketing and Licensing</h4>
                <p>5901 West Side Ave Suite 601</p>
                <p>North Bergen, NJ 07047</p>
                <a href="https://www.google.com/">Info@mystripes.com</a>
            </div>
        </div>
    );
};

export default Contact;