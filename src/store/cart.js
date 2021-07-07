import superagent from "superagent";
import { createSlice } from "@reduxjs/toolkit";

const API = "https://api-js401.herokuapp.com/api/v1/products";

const cart = createSlice({
  name: "Cart",
  initialState: {
    results: [],
  },
  reducers: {
    addR(state, action) {
      state = { results: [...state.results, action.payload] };
      return state;
    },
    removeR(state, action) {

    //   let data = state.results;
      let idx = state.results.indexOf(action.payload);
      state.results.splice(idx, 1);
      return state;
    },
  },
});
// let initialState = {
//     results: []
// }

//  // eslint-disable-next-line import/no-anonymous-default-export
// export default (state = initialState, action) =>{

//     const {type, payload} = action;
//     switch (type) {

//         case 'ADD':

//            return {results: [...state.results, payload]}
//         case 'REMOVE':
//             let data = state.results;
//             let idx = data.indexOf(payload)
//             data.splice(idx,1)
//             return {results:data}

//         default:
//             return state;
//     }
// }

export const add = (payload) => (dispatch, state) => {
  let body = {
    inStock: payload.inStock - 1,
  };
  return superagent
    .put(`${API}/${payload._id}`)
    .send(body)
    .then((res) => {
      dispatch(addR(res.body));
    });
};

export const remove = (payload) => (dispatch, state) => {
  let body = {
    inStock: payload.inStock + 1,
  };
  return superagent
    .put(`${API}/${payload._id}`)
    .send(body)
    .then((res) => {
      dispatch(removeR(res.body));
    });
};

export const { addR, removeR } = cart.actions;

export default cart.reducer;
