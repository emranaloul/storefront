/* eslint-disable import/no-anonymous-default-export */

import superagent from 'superagent';
import { createSlice } from "@reduxjs/toolkit";

const API = 'https://api-js401.herokuapp.com/api/v1/products';


const details = createSlice({
    name: 'detail',
    initialState: {},
    reducers:{
        viewR(state,action){
            state = action.payload
            return state

        }
    }


})
// let initialState = {}

// export default (state= initialState, action)=>{
//     const {type, payload} = action
//     switch (type) {
//         case 'view':
            
//            return payload
    
//         default:
//             return state;
//     }
    
// }

export const view = payload => (dispatch)=>{
    return superagent.get(`${API}/${payload._id}`).then(res=>{
        dispatch(viewR(res.body))
})
}

export const {viewR} = details.actions

export default details.reducer;