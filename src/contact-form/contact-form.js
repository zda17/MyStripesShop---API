const express = require('express');
const nodemailer = require ('nodemailer');

const contactFormRouter = express.Router();
const bodyParser = express.json();

contactFormRouter
	.route('/')
	.post(bodyParser, (req,res) => {
		let data = req.body;
		let smtpTransport = nodemailer.createTransport({
			service:'Gmail' ,
			port:465,
			auth:{
				user:'mystripesapp@gmail.com',
				pass:'hwuwkfzsetkbllvs'
			}
		});
	  
		let mailOptions={
			from:data.email,
			to:'mystripesapp@gmail.com',
			subject:`Message from ${data.name}`,
			html:`
			<p>This is an auto-generated email from the Contact form of mystripes.com! Below you will find the user's provided email, name, and message.</p>
			<h3 style="margin-bottom: 0px;" >Information</h3>
			<hr style="display: inline-block; width: 125px; margin-top: 10px;" />
			<ul style="padding: 0; margin: 0;">
				<li style="font-size: 16px;" >Name: ${data.name}</li>
				<li style="font-size: 16px;" >Email: ${data.email}</li>
			</ul>
			
			<h3 style="margin-top: 50px; margin-bottom: 0px;" >Message</h3>
			<hr style="display: inline-block; width: 125px; margin-top: 10px;" />
			<p style="font-size: 16px; margin: 0;" >${data.message}</p>
			`
		};
	  
		smtpTransport.sendMail(mailOptions, (error,response)=>{
			if(error){
				res.send(error)
			}
			else{
				res.send('Success')
			}
		});
		smtpTransport.close();
	  });

module.exports = contactFormRouter;