import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {orderListReducer, orderDetailsReducer, orderSaveReducer} from './reducers/orderReducers';
import thunk from  'redux-thunk';
// import Cookie from 'js-cookie';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

// const userInfo = Cookie.getJSON("userInfo") || null;
const initialState={};
const reducer = combineReducers({
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    orderSave: orderSaveReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
