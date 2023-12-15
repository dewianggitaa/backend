require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const productRoutes = require('./src/routes/product');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', productRoutes);
app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});