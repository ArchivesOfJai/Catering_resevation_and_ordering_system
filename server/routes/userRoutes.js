import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password, address, phoneNumber, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.json({ message: 'User already registered' });
        }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        address,
        phoneNumber,
        role,
      });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user){ return res.status(400).json({ message: 'Invalid credentials' });}
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch){ return res.status(400).json({ message: 'Invalid credentials' });}
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/profile', authMiddleware(), async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
