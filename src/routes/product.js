const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.post('/product', productsController.createProduct)

router.get('/products', productsController.getAllProducts)

module.exports = router;
