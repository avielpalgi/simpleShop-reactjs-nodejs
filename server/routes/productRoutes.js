import express from 'express'
const router = express.Router()
import {protect,admin} from '../middleware/authMiddleware.js'
import {getProducts,updateProduct,createProduct,getProductById,deleteProduct,createProductReview,getTopProducts} from '../controllers/productController.js'


router.route('/')
.get(getProducts)//Get all products
.post(protect,admin,createProduct)//Create a Product
router.route('/:id')
.get(getProductById)//Get product by ID
.delete(protect,admin,deleteProduct)//Delete Product by ID
.put(protect,admin,updateProduct)//Update Product by ID
router.route('/:id/reviews')
.post(protect,createProductReview)
router.route('/top/top').get(getTopProducts)

export default router
