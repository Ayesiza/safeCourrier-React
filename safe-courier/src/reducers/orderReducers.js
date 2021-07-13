import { ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_SAVE_FAIL, ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCESS } from "../constants/orderConstants";


function orderListReducer(state = { orders: []}, action) {

    switch (action.type) {
        case ORDER_LIST_REQUEST:
          return { loading:true };
        case ORDER_LIST_SUCCESS:
          return { loading: false, orders:action.payload};
        case ORDER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

function orderDetailsReducer(state = { order: {} }, action) {

    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
          return { loading:true };
        case ORDER_DETAILS_SUCCESS:
          return { loading: false, order:action.payload};
        case ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

function orderSaveReducer(state = { order: {} }, action) {

  switch (action.type) {
      case ORDER_SAVE_REQUEST:
        return { loading:true };
      case ORDER_SAVE_SUCCESS:
        return { loading: false,success:true, order:action.payload};
      case ORDER_SAVE_FAIL:
          return {loading: false, error: action.payload};
      default:
          return state;
  }
};
export  {orderListReducer, orderDetailsReducer, orderSaveReducer};