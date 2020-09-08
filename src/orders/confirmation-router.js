const express = require('express');
const nodemailer = require('nodemailer');

const confirmationRouter = express.Router();
const bodyParser = express.json();

confirmationRouter
    .route('/')
    .post(bodyParser, ({ body }, res) => {
        const { cart, userInfo, confCode } = body;
        console.log(cart);
        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'mystripesapp@gmail.com',
                pass: 'hwuwkfzsetkbllvs'
            }
        });

        const displayCart =
            `<section style="text-align: center;">
                    ${cart.map(product => {
                        return (
                            `<section style="margin: 10px; color:rgb(0, 38, 72); display: inline-block;">
                                    <div>
                                        <img style="width: 100px; height: 100px" src=${product.photo_url} />
                                    </div>
                                    <div>
                                        <h4 style="margin: 0"><strong>${product.name}</strong></h4>
                                        <p style="margin: 0">Size: ${product.size}</p> 
                                        <p style="margin: 0">Color: ${product.color_name.toUpperCase()}</p>
                                        <p style="margin: 0">Quantity: ${product.quantity}</p>
                                        <p style="margin: 0">Price: $${product.totalProductPrice}</p>
                                    </div>
                                </section>`
                        )
                    }).join(' ')}
            </section>`

        const userShipInfo = `
            <section style="text-align: center;">
                <p style="color:rgb(0, 38, 72);">${userInfo.address}, ${userInfo.apartmentsuiteetc.optional && '#' + userInfo.apartmentsuiteetc.optional + ', '}${userInfo.city}, ${userInfo.state}, ${userInfo.zipCode}, ${userInfo.country}</p>
            </section>
        `

        const mailOptions = {
            from: 'mystripesapp@gmail.com',
            // put user email below 
            // to: email,
            to: 'shanscirg7@gmail.com',
            cc: 'mystripesapp@gmail.com',
            subject: `My Stripes Order Confirmation`,
            html: `
            <h1 style="color:rgb(0, 38, 72); margin: 5px 0; text-align: center;">Thank you for shopping with My Stripes!</h1>
            <div>
                <img style="width: 200px; height: 200px; display: block; margin: auto;" src="https://mystripes-client.herokuapp.com/static/media/logo.621be173.png" />
            </div>
            <h2 style="color:rgb(0, 38, 72); font-weight: 500; margin: 5px 0; text-align: center;">Your order will arrive in 7-10 business days.</h2>
            <h2 style="color:rgb(0, 38, 72); font-weight: 500; margin: 5px 0; text-align: center;">Confirmation code: <strong>${confCode}</strong></h2>
			<hr style="text-align: center; width: 30%; margin-top: 10px;" />
			<h4 style="margin-bottom: 10px; color: black; text-align: center;">Shipping Address</h4>
            ${userShipInfo}
			<h4 style="margin-bottom: 10px; color: black; text-align: center;">Order Details</h4>
            ${displayCart}
			`
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send('Success')
            }
        });
        smtpTransport.close();
    });

module.exports = confirmationRouter;