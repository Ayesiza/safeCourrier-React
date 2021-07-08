import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import orderListReducer from './reducers/orderReducers';
import thunk from  'redux-thunk';

const initialState={};
const reducer = combineReducers({
    orderList: orderListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
