import Product from '../models/Product.js';

// Controller for adding a new product
export const addProduct = async (req, res) => {
  const { name, description, price, category, stock, imageUrl } = req.body;

  try {
    // Create a new product
    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    // Save the product to the database
    const createdProduct = await product.save();

    res.status(201).json({
      message: 'Product added successfully',
      product: createdProduct,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
