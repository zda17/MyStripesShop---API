const express = require('express');
const nodemailer = require('nodemailer');
const waitingListService = require('./waiting-list-service');
const waitingListRouter = express.Router();
const bodyParser = express.json();

waitingListRouter
	.route('/')
	.get(bodyParser, async (req, res) => {
		const {product_sku} = req.body;
		const dbResponse = await waitingListService.getFromWaitingListBySku(req.app.get('db'), product_sku);
		res.send(dbResponse);
	})
	.post(bodyParser, (req, res) => {
		const { name, email, product} = req.body;
		console.log(product)
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

		smtpTransport.sendMail(mailOptions, async (error, response) => {
			if (error) {
				res.send(error)
			}
			else {
				const data = {
					name,
					email,
					product_sku: product.sku
				}
				const dbResponse = await waitingListService.insertToWaitingList(req.app.get('db'), data)
				res.send(dbResponse)
			}
		});
		smtpTransport.close();
	});

waitingListRouter
	.route('/all')
	.get(async (req, res) => {
		const dbResponse = await waitingListService.getAllFromWaitingList(req.app.get('db'));
		res.send(dbResponse);
	})

module.exports = waitingListRouter;