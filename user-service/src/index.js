const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Load environment variables from .env file
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: path.resolve(__dirname, `../config/${env}.env`) });

// Connect to MongoDB
connectDB();

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User Service listening on port ${PORT} in ${env} mode`);
});
