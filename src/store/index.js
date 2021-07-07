// import {createStore, combineReducers, applyMiddleware } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './categories';
import cart from './cart';
import details from './details';
// import thunk from 'redux-thunk';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

let reducers = combineReducers({category: reducer, cart: cart, details:details})

// const store = () => {
//     return createStore( reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

const store = configureStore({reducer: reducers})

export default store;