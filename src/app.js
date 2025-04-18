const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware to parse JSON bodies
app.use(express.json());

// Mount user routes under /api/users
app.use('/api/users', userRoutes);

// Basic health check endpoint
app.get('/', (req, res) => {
  res.send('User Service is running');
});

module.exports = app;