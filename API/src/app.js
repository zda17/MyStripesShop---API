require('dotenv').config();
const express = require('express');
const nodemailer = require ('nodemailer');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

// Route imports
const authRouter = require('./auth/auth-router');
const productRouter = require('./products/product-router');

// Create express app
const app = express();
const bodyParser = express.json();

// Setup morgan option based on environment
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

// cors middleware for allowing cross origin
app.use(cors());
// morgan middleware for logging information
app.use(morgan(morganOption));
// helmet middleware for hiding our server type
app.use(helmet());


// Routes
  // User Authorization
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.post( '/api/forma', bodyParser, (req,res)=>{
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
app.get('/', (req, res) => {
  res.send('Hello, boilerplate!');
});

// Error handler
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
    response = {message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;