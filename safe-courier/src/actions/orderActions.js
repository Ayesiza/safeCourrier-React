import axios from "axios";
import { ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_SAVE_FAIL, ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCESS } from "../constants/orderConstants"

const listOrders =()=> async (dispatch) => {
    const {token} =JSON.parse(localStorage.getItem("token"));
    try{
        dispatch({type: ORDER_LIST_REQUEST});
        const { data} = await axios.get('/api/orders',{
            headers: {
                'Authorization':'Bearer ' + token
            }
        });

        return dispatch({type: ORDER_LIST_SUCCESS, payload:data});    
    }
    catch(error){
        // dispatch({type: ORDER_LIST_FAIL})
    }
};

const saveOrder = (order) => async(dispatch, getState) => {
    try{
dispatch({ type: ORDER_SAVE_REQUEST , payload:order});
const {userLogin:{userInfo} } = getState();
const { data } = await axios.post('/api/order', order, {
headers:{
    'Authorization':'Bearer'+ userInfo.token
}
});
dispatch({ type: ORDER_SAVE_SUCCESS, payload:data});

    }catch (error){
        dispatch({type:ORDER_SAVE_FAIL, payload:error.message});
    }
};


const detailsOrder = (orderId)=> async (dispatch) => {
try {
    dispatch({type: ORDER_DETAILS_REQUEST, payload:orderId});
    const {data} = await axios.get("/api/orders/" + orderId);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data})

}catch (error) {
    dispatch({type: ORDER_DETAILS_FAIL, payload:error.message})

}
};
export{ listOrders, detailsOrder,saveOrder }
