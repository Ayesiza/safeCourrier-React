import axios from "axios";
import { ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../constants/orderConstants"

const listOrders =()=> async (dispatch) => {
    try{
        dispatch({type: ORDER_LIST_REQUEST});
        const { data} = await axios.get('/api/orders');
        dispatch({type: ORDER_LIST_SUCCESS, payload:data});    
    }
    catch(error){
        dispatch({type: ORDER_LIST_FAIL})
    }
}

const detailsOrder = (orderId)=> async (dispatch) => {
try {
    dispatch({type: ORDER_DETAILS_REQUEST, payload:orderId});
    const {data} = await axios.get("/api/orders/" + orderId);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data})

}catch (error) {
    dispatch({type: ORDER_DETAILS_FAIL, payload:error.message})

}
}
export{ listOrders, detailsOrder}
