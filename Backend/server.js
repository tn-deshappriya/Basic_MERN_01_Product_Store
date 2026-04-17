import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/products', (req, res) => { });

app.listen(3001, () => {
    connectDB();
    console.log('Server is running on localhost:3001');
});

// mongodb+srv://thiniranilushandeshappriya_db_user:E6EGenqSrJtcg40s@cluster1.xdfa3aj.mongodb.net/?appName=Cluster1
