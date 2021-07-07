/* eslint-disable import/no-anonymous-default-export */

import superagent from 'superagent';

const API = 'https://api-js401.herokuapp.com/api/v1/products';

let initialState = {}

export default (state= initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case 'view':
            
           return payload
    
        default:
            return state;
    }
    
}

export const view = payload => (dispatch)=>{
    return superagent.get(`${API}/${payload._id}`).then(res=>{
        dispatch({
            type: 'view',
            payload: res.body
        })
})
}