import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../stylesheets/Contact.scss';
import axios from 'axios';


// const Contact = () => {
    export default class Contact extends Component{

    state={
        name:'',
        email:'',
        message:'',
        sent:false
    }

//handling inputs
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}
handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}
handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}
//end of handling inputs

//submitting the form
formSubmit=(e)=>{
    e.preventDefault();
    let data = {
        name:this.state.name,
        email:this.state.email,
        message:this.state.message
    }
    axios.post('/api/forma',data)
    .then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    })
    .catch(()=>{
        console.log('message not sent');

    })
}
// reseting data
resetForm=()=>{
    this.setState({
        name:'',
        email:'',
        message:''
    })
    setTimeout(()=>{
        this.setState({
            sent:false,

        })
    },3000)
}




render(){
    return(
        <div className="mainContact">
            <h1>Contact Us</h1>
            <div className="contactInfo">
                <form onSubmit={this.formSubmit}>
                    <div className="contactForm">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        name="name"
                        className="info"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleName}
                        />
                    </div>
                    <div className="contactForm">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        name="email"
                        className="info" 
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        />
                    </div>
                    <div className="contactForm">
                        <label htmlFor="message">Message</label>
                        <input type="text" 
                        name="message" 
                        className="info" 
                        placeholder="Your Message"
                        value={this.state.message}
                        onChange={this.handleMessage}
                        />
                    </div>
                    {/* <div className={this.state.sent?'msg  msgAppear':'msg'}>Message has been sent</div> */}
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        );
    };
};

