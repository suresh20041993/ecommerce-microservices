const express = require('express');
const proxyConfig = require('../config/proxyConfig');

const app = express();

// Middleware for authentication, rate limiting, etc.
// Example:
// app.use(require('../middleware/authentication'));

// Apply proxy configuration
proxyConfig(app);

module.exports = app;
