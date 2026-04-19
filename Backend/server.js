import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.post('/products', (req, res) => { });

app.listen(3001, () => {
    connectDB();
    console.log('Server is running on localhost:3001');
});

