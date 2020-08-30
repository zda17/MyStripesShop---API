const express = require('express');
const nodemailer = require('nodemailer');

const waitingListRouter = express.Router();
const bodyParser = express.json();

waitingListRouter
	.route('/')
	.post(bodyParser, ({ body }, res) => {
		console.log(body);
		const { name, email, product, size, color } = body;
		const smtpTransport = nodemailer.createTransport({
			service: 'Gmail',
			port: 465,
			auth: {
				user: 'mystripesapp@gmail.com',
				pass: 'hwuwkfzsetkbllvs'
			}
		});

		const mailOptions = {
			from: email,
			to: 'mystripesapp@gmail.com',
			subject: `Waiting List Request from MyStripes User ${name}`,
			html: `
			<p>This is an auto-generated email from mystripes.com's out-of-stock message! Below you will find the user's provided email, name, and product they are waiting for.</p>
			<h3 style="margin-bottom: 0px;" >Information</h3>
			<hr style="display: inline-block; width: 125px; margin-top: 10px;" />
			<ul style="padding: 0; margin: 0;">
				<li style="font-size: 16px;" >Name: ${name}</li>
				<li style="font-size: 16px;" >Email: ${email}</li>
				<li style="font-size: 16px;" >Product: ${product}</li>
				<li style="font-size: 16px;" >Size: ${size}</li>
				<li style="font-size: 16px;" >Color: ${color}</li>
			</ul>
			`
		};

		smtpTransport.sendMail(mailOptions, (error, response) => {
			if (error) {
				res.send(error)
				console.log('nope');
			}
			else {
				res.send('Success')
				console.log('yup');
			}
		});
		smtpTransport.close();
	});

module.exports = waitingListRouter;