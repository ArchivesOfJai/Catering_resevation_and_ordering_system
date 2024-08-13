import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route for registering users and admins
router.post('/register', registerUser);

// Route for logging in users and admins
router.post('/login', loginUser);

export default router;
