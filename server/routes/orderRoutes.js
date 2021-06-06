import express from 'express'
const router = express.Router()
import {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders,getOrders,updateOrderToDelivered} from '../controllers/orderController.js'
import {protect,admin} from '../middleware/authMiddleware.js'


router.route('/myorders').get(protect,getMyOrders)
router.route('/')
.post(protect,addOrderItems)
.get(protect,admin,getOrders)
router.route('/:id')
.get(protect,getOrderById)//Get My Order
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)


export default router