import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../stylesheets/Contact.scss';
import axios from '../utils/axios';


const Contact = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [sent, setSent] = useState(false);


//handling inputs
const handleName=(e)=>{
    setName(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handleMessage=(e)=>{
    setMessage(e.target.value)
}
//end of handling inputs

//submitting the form
const formSubmit=(e)=>{
    e.preventDefault();
    let data = {
        name,
        email,
        message,
    }

    axios.post('/forma',data)
    .then(res=>{
        setSent(true);
        console.log('Message was sent!')
        resetForm()
    })
    .catch(()=>{
        console.log('message not sent');

    })
}
// reseting data
const resetForm=()=>{
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(()=>{
        setSent(false);
    },3000)
}





return(
    <div className="mainContact">
        <h1>Contact Us</h1>
        <div className="contactInfo">
            <form onSubmit={formSubmit}>
                <div className="contactForm">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    name="name"
                    className="info"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleName}
                    />
                </div>
                <div className="contactForm">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    name="email"
                    className="info" 
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className="contactForm">
                    <label htmlFor="message">Message</label>
                    <input type="text" 
                    name="message" 
                    className="info" 
                    placeholder="Your Message"
                    value={message}
                    onChange={handleMessage}
                    />
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Contact;
