import {createStore, combineReducers, applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './categories';
import thunk from 'redux-thunk'

let reducers = combineReducers({category: reducer})
console.log("🚀 ~ file: index.js ~ line 7 ~ reducers", reducers)

const store = () => {
    return createStore( reducers, applyMiddleware(thunk));
}

export default store();