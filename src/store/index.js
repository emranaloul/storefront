import {createStore, combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './categories';
import cart from './cart';

let reducers = combineReducers({category: reducer, cart: cart})

const store = () => {
    return createStore( reducers, composeWithDevTools());
}

export default store();