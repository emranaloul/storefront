/* eslint-disable import/no-anonymous-default-export */
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

export const view = payload =>{
console.log("🚀 ~ file: details.js ~ line 18 ~ payload", payload)
    return {
        type: 'view',
        payload: payload
}
}