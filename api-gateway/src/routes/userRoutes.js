const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.USER_SERVICE_URL}/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.USER_SERVICE_URL}/users`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: error.message });
    }
});

module.exports = router;
