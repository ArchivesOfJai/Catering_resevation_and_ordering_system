import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);
// use product routes
app.use('/api/products', productRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
