import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Place Order
router.post('/', authMiddleware('user'), async (req, res) => {
    const { products } = req.body;
    try {
      const newOrder = new Order({
        user: req.user.id,
        products,
      });
  
      for (const item of products) {
        const product = await Product.findById(item.product);
        product.stock -= item.quantity;
        await product.save();
      }
  
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get Orders (Admin)
router.get('/', authMiddleware('admin'), async (req, res) => {
    try {
      const orders = await Order.find().populate('user products.product');
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get User Orders
router.get('/user', authMiddleware('user'), async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user.id }).populate('products.product');
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update Order Status (Admin)
router.patch('/:id/status', authMiddleware('admin'), async (req, res) => {
    const { status } = req.body;
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  // Delete an order (admin only)
router.delete('/:id', authMiddleware('admin'), async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.json({ message: 'Order deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  
export default router;
