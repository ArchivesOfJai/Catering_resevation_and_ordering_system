import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';


// Load environment variables
dotenv.config();
const PORT = process.env.PORT||3000;

// Connect to the database
connectDB();

const app = express();


app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);
// use product routes
app.use('/api/products', productRoutes);

// Example route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });


app.listen(PORT, console.log(`Server running on port ${PORT}`));
