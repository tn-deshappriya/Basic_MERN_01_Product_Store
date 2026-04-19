import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body.

app.post('/api/products', async (req, res) => {
    const product = req.body; // Assuming the product data is sent in the request body as JSON

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error in creating product:', error);
        res.status(500).json({ success: false, message: 'Error saving product' });
    }
});

app.listen(3001, () => {
    connectDB();
    console.log('Server is running on localhost:3001');
});

