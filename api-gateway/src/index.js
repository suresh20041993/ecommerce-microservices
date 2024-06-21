const express = require('express');
const bodyParser = require('body-parser');
const gatewayRoutes = require('./routes/gatewayRoutes');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());

// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(__dirname, `../config/${env}.env`) });

// Routes
app.use('/api', gatewayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT} in ${env} mode`);
});
