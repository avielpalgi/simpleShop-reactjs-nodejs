import * as constants from '../constants/orderConstants'
import axios from 'axios'

export const createOrder = (order) => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.CREATE_ORDER_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/orders`,order,config)
        dispatch({
            type:constants.CREATE_ORDER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

    
export const getOrderDetails = (id) => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.ORDER_DETAILS_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config)
        dispatch({
            type:constants.ORDER_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const payOrder = (orderId, paymentResult) => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.ORDER_PAY_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${orderId}/pay`,paymentResult, config)
        dispatch({
            type:constants.ORDER_PAY_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const listMyOrders = () => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.ORDER_LIST_MY_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/myorders`, config)
        dispatch({
            type:constants.ORDER_LIST_MY_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.ORDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const getAllOrders = () => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.GET_ORDERS_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/`, config)
        dispatch({
            type:constants.GET_ORDERS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.GET_ORDERS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const deliverOrder = (orderId) => async(dispatch,getState)=>{
    try {
        dispatch({
            type:constants.ORDER_DELIVER_REQUEST
        })

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${orderId}/deliver`,{}, config)
        dispatch({
            type:constants.ORDER_DELIVER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.ORDER_DELIVER_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }