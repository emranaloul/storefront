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

export const add = (payload) =>{
return {
    type: 'ADD',
    payload: payload
}

}

export const remove = (payload) =>{
    return {
        type: 'REMOVE',
        payload: payload
    }
    
    }