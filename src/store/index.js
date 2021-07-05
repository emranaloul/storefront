import {createStore, combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './categories';

let reducers = combineReducers({category: reducer})
console.log("🚀 ~ file: index.js ~ line 7 ~ reducers", reducers)

const store = () => {
    return createStore( reducers, composeWithDevTools());
}

export default store();