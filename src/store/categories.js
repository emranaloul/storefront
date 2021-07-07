import superagent from 'superagent';
import { createSlice } from "@reduxjs/toolkit";

const API = 'https://api-js401.herokuapp.com/api/v1/products';


const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers : {
    elecProducts(state,action){
      state = []
     state = action.payload.filter(val => val.category === 'electronics')
      
      return state;
    },
    foodProducts(state,action){
      state = []
      state = action.payload.filter(val => val.category === 'food')
       
       return state;
    }
    

  }
})

// eslint-disable-next-line import/no-anonymous-default-export
// export default (state = null, action) => {
 
//   let { type, payload } = action;
//   switch (type) {
//     case "electronics":
//       let data = payload.filter((val) => val.category === type);
//       return { type:"electronics", data: data };
//     case "food":
//       let data2 = payload.filter((val) => val.category === type);
//       return { type:'food', data: data2 };
//     default:
//       return state;
//   }
// };

export const electronics = (type) => (dispatch,state) =>{
  return superagent.get(API).then(res=>{ 
    dispatch(elecProducts(res.body.results))
  }
  )
};

export const food = (type) => (dispatch,state) => {
  return superagent.get(API).then(res=>{ 
    dispatch(dispatch(foodProducts(res.body.results)))
  }
  )
};

export default categorySlice.reducer;

export const {elecProducts, foodProducts} = categorySlice.actions;
