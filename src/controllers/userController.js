const User = require('../models/userModel');

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate request data
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Check for existing user with same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Create new user and save
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller function to retrieve a user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createUser,
  getUserById
};