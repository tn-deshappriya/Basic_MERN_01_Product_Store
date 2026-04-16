import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(3001, () => {
    console.log('Server is running on localhost:3001');
})