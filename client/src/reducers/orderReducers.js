import * as constants from '../constants/orderConstants'

export const orderCreateReducer = (state={},action)=>{
    switch (action.type) {
        case constants.CREATE_ORDER_REQUEST:
            
            return{loading:true}
            case constants.CREATE_ORDER_SUCCESS:
                return{
                    loading:false,
                    success:true,
                    order:action.payload
                }
                case constants.CREATE_ORDER_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }    
        default:
            return state
    }
}

export const orderDetailsReducer = (state={loading:true, orderItems:[], shippingAddress:{} },action)=>{
    switch (action.type) {
        case constants.ORDER_DETAILS_REQUEST:
            return{loading:true}
            
            case constants.ORDER_DETAILS_SUCCESS:
                return{
                    loading:false,
                    order:action.payload
                }
                case constants.ORDER_DETAILS_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }    
        default:
            return state
    }
}

export const orderPayReducer = (state={},action)=>{
    switch (action.type) {
        case constants.ORDER_PAY_REQUEST:
            return{loading:true}
            
            case constants.ORDER_PAY_SUCCESS:
                return{
                    loading:false,
                    success:true
                }
                case constants.ORDER_PAY_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }
                    case constants.ORDER_PAY_RESET:
                        return{}      
        default:
            return state
    }
}

export const orderListMyReducer = (state={orders:[]},action)=>{
    switch (action.type) {
        case constants.ORDER_LIST_MY_REQUEST:
            return{loading:true}
            
            case constants.ORDER_LIST_MY_SUCCESS:
                return{
                    loading:false,
                    orders:action.payload
                }
                case constants.ORDER_LIST_MY_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }
                    case constants.ORDER_LIST_MY_RESET:
                        return{orders:[]}

        default:
            return state
    }
}

export const getOrdersReducer = (state={orders:[]},action)=>{
    switch (action.type) {
        case constants.GET_ORDERS_REQUEST:
            return{loading:true}
            
            case constants.GET_ORDERS_SUCCESS:
                return{
                    loading:false,
                    orders:action.payload
                }
                case constants.GET_ORDERS_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }
        default:
            return state
    }
}

export const orderDeliverReducer = (state={},action)=>{
    switch (action.type) {
        case constants.ORDER_DELIVER_REQUEST:
            return{loading:true}
            
            case constants.ORDER_DELIVER_SUCCESS:
                return{
                    loading:false,
                    success:true
                }
                case constants.ORDER_DELIVER_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }
                    case constants.ORDER_DELIVER_RESET:
                        return{}      
        default:
            return state
    }
}
