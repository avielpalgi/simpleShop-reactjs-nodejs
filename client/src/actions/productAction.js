import axios from 'axios'
import  * as constants from '../constants/productConstants'

export const listProducts = (keyword = '',pageNumber = '') => async(dispatch)=>{
try {
    dispatch({type:constants.PRODUCT_LIST_REQUEST})
    const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)
    dispatch({
        type:constants.PRODUCT_LIST_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:constants.PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message
    })
}
}

export const listProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type:constants.PRODUCT_DETAILS_REQUEST})
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type:constants.PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const deleteProduct = (id) => async(dispatch,getState)=>{
    try {
        dispatch({type:constants.PRODUCT_DELETE_REQUEST})

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/products/${id}`,config)

        dispatch({
            type:constants.PRODUCT_DELETE_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const createProduct = () => async(dispatch,getState)=>{
    try {
        dispatch({type:constants.PRODUCT_CREATE_REQUEST})

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/products`,{},config)

        dispatch({
            type:constants.PRODUCT_CREATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

export const updateProduct = (product) => async(dispatch,getState)=>{
    try {
        dispatch({type:constants.PRODUCT_UPDATE_REQUEST})

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/products/${product._id}`,product,config)

        dispatch({
            type:constants.PRODUCT_UPDATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }
 
export const createProductReview = (id, review) => async(dispatch,getState)=>{
    try {
        dispatch({type:constants.PRODUCT_CREATE_REVIEW_REQUEST})

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        await axios.post(`/api/products/${id}/reviews`,review,config)

        dispatch({
            type:constants.PRODUCT_CREATE_REVIEW_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

    
export const getTopProductsAction = () => async(dispatch,getState)=>{
    try {
        dispatch({type:constants.PRODUCT_GET_TOP_REQUEST})

        //const { userLogin:{userInfo} } = getState()
        // const config = {
        //     headers:{
        //         'Content-Type':'application/json',
        //         Authorization:`Bearer ${userInfo.token}`
        //     }
        // }
        const { data } = await axios.get(`/api/products/top/top`)

        dispatch({
            type:constants.PRODUCT_GET_TOP_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:constants.PRODUCT_GET_TOP_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
    }

