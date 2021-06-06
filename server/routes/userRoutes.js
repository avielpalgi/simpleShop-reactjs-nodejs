import express from 'express'
const router = express.Router()
import {protect,admin} from '../middleware/authMiddleware.js'
import {getUsers,updateUser,getUserById ,authUser,deleteUser,GetUserProfile,registerUser,updateUserProfile} from '../controllers/userController.js'



router.post('/login',authUser)
router.route('/:id')
.delete(protect,admin,deleteUser)
.get(protect,admin,getUserById)
.put(protect,admin,updateUser)
router.route('/').post(registerUser)
.get(protect,admin,getUsers)
router.route('/profile/profile')
.get(protect,GetUserProfile)
.put(protect,updateUserProfile)
export default router
