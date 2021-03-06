import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productCreateReducer, productDetailsReducer,productDeleteReducer,productUpdateReducer,productCreateReviewReducer,getTopProductsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { userLoginReducer,userDeleteReducer, userListReducer, userRegisterReducer,userDetailsReducer,userUpdateProfileReducer,userUpdateReducer } from './reducers/userReducers'
import {orderCreateReducer,orderDetailsReducer,orderPayReducer,orderListMyReducer,getOrdersReducer,orderDeliverReducer} from './reducers/orderReducers'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    createReview:productCreateReviewReducer,
    getTopProducts:getTopProductsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userProfileUpdate:userUpdateProfileReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderDeliver:orderDeliverReducer,
    orderListMy:orderListMyReducer,
    getOrders:getOrdersReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart:{ cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store