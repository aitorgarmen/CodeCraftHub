// src/routes/userRoutes.js

const express = require('express');
const { createUser, getUserById } = require('../controllers/userController');

// Create an instance of the router
const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get a user by ID
router.get('/:id', getUserById);

module.exports = router;