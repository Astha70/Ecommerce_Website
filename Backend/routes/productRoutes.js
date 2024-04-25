const express = require('express');
const formidable = require('express-formidable');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createProductController, getProductController, singleProductController, productPhotoController, deleteProductController, updateProductController, productFiltersController, productCountController, productListController, searchProductController, relatedProductController } = require('../controllers/productController');

const router = express.Router();

// routes

// create product
router.post('/create-product',requireSignIn, isAdmin,formidable(), createProductController);

// update product
router.put('/update-product/:pid',requireSignIn, isAdmin,formidable(), updateProductController);

// get all products
router.get('/get-product', getProductController);

// get single product
router.get('/single-product/:slug', singleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:pid',deleteProductController);

// filter product
router.post('/product-filter', productFiltersController);

// count product
router.get('/product-count', productCountController);

// per page product
router.get('/product-list/:page', productListController);

// search product
router.get('/search/:keyword', searchProductController);

// similar product
router.get('/related-product/:pid/:cid',relatedProductController );

module.exports = router;

