const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('../src/.env')

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total; // could also use request params

  console.log('Payment Request Received', total) // same URL as in src/Payment.js

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

}) 

// - Listen command
exports.api = functions.https.onRequest(app);

//  Example endpoint
//  http://localhost:5001/challenge-yt/us-central1/api