const express = require('express');
const axios = require('axios');

const router = express.Router();

const USER_SERVICE_URL = 'http://localhost:3001/users';
const PRODUCT_SERVICE_URL = 'http://localhost:3002/products';
const ORDER_SERVICE_URL = 'http://localhost:3003/orders';

// User routes
router.use('/users', (req, res) => {
    const url = `${USER_SERVICE_URL}${req.url}`;
    axios({
        method: req.method,
        url,
        data: req.body
    })
    .then(response => {
      // Log the response data
        res.status(response.status).json(response.data);
    })
    .catch(error => {
        console.error(error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    
});

// Product routes
router.use('/products', (req, res) => {
    const url = `${PRODUCT_SERVICE_URL}${req.url}`;
    axios({
        method: req.method,
        url,
        data: req.body
    })
    .then(response => {
        console.log(response.data);  // Log the response data
        res.status(response.status).json(response.data);
    })
    .catch(error => {
        console.error(error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Order routes
router.use('/orders', (req, res) => {
    const url = `${ORDER_SERVICE_URL}${req.url}`;
    axios({
        method: req.method,
        url,
        data: req.body
    })
    .then(response => {
        console.log(response.data);  // Log the response data
        res.status(response.status).json(response.data);
    })
    .catch(error => {
        console.error(error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

module.exports = router;
