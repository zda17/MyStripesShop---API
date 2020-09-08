const express = require('express');
const nodemailer = require('nodemailer');
const waitingListService = './waiting-list-service';
const waitingListRouter = express.Router();
const bodyParser = express.json();

waitingListRouter
	.route('/')
	.post(bodyParser, (req, res) => {
		const { name, email, product} = req.body;
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
			subject: `Waiting List Request from My Stripes User ${name}`,
			html: `
			<p>This is an auto-generated email from mystripes.com's out-of-stock message! Below you will find the user's provided email, name, and product they are waiting for.</p>
			<h3 style="margin-bottom: 0px;" >Information</h3>
			<hr style="display: inline-block; width: 125px; margin-top: 10px;" />
			<ul style="padding: 0; margin: 0;">
				<li style="font-size: 16px;" >Name: ${name}</li>
				<li style="font-size: 16px;" >Email: ${email}</li>
				<li style="font-size: 16px;" >Product: ${product.name}</li>
				<li style="font-size: 16px;" >Size: ${product.size}</li>
				<li style="font-size: 16px;" >Color: ${product.color_name}</li>
			</ul>
			`
		};

		smtpTransport.sendMail(mailOptions, (error, response) => {
			if (error) {
				res.send(error)
			}
			else {
				res.send('Success')
				const data = {
					name,
					email,
					product_sku: product.product_sku
				}
				waitingListService.insertToWaitingList(req.app.get('db'), data)
			}
		});
		smtpTransport.close();
	});

module.exports = waitingListRouter;