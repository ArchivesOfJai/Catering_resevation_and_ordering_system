import express from 'express';
import { addProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route for adding a product (admin only)
router.post('/add', protect, admin, addProduct);

export default router;
