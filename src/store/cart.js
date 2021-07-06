import superagent from 'superagent';

const API = 'https://api-js401.herokuapp.com/api/v1/products';

let initialState = {
    results: []
}

 // eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    
    const {type, payload} = action;
    switch (type) {

        case 'ADD':
       
           return {results: [...state.results, payload]}
        case 'REMOVE':
            let data = state.results;
            let idx = data.indexOf(payload)
            data.splice(idx,1)
            return {results:data}
    
        default:
            return state;
    }
}

export const add = (payload) => (dispatch) => {
    let body = {
        inStock: payload.inStock - 1, 
    }
    return superagent.put(`${API}/${payload._id}`).send(body).then((res) =>{
        dispatch({
            type: 'ADD',
            payload: res.body
        })
    })

}

export const remove = (payload) => (dispatch) => {
    let body = {
        inStock: payload.inStock + 1, 
    }
    return superagent.put(`${API}/${payload._id}`).send(body).then((res) =>{
        dispatch({
            type: 'REMOVE',
            payload: res.body
        })
    })
    
    }