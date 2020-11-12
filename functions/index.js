const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HmndvF215nnoQRLLqKJl8dkBqxbNPNXBPz0y01MZT4iTsz3vT0z5ySktTJczwWPQsZbR6iKUyuIzd2Yc9vkNoB100oMIjGSir')

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// - Listen command
exports.api = functions.https.onRequest(app);