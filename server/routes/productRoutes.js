import express from 'express';
import Product from '../models/Product.js';
import upload from '../middleware/uploadMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Add Product
router.post('/', upload.single('image'), async (req, res) => {
    const { name, description, price, category, stock } = req.body;
    try {
      const newProduct = new Product({
        name,
        description,
        price,
        category,
        stock,
        imagePath: req.file.path, // Store the file path
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Get All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Product
router.delete('/:id', authMiddleware('admin'), async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
