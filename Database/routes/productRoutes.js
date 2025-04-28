const express = require('express');
const { addProduct, getAllProducts, deleteProduct, getSingleProduct, updateProduct, searchProduct } = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post('/add', verifyToken, addProduct);
router.get('/', verifyToken, getAllProducts);
router.delete('/:id', verifyToken, deleteProduct);
router.get('/:id', verifyToken, getSingleProduct);
router.put('/update/:id', verifyToken, updateProduct);
router.get('/search/:key', verifyToken, searchProduct);

module.exports = router;
