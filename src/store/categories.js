import superagent from 'superagent';

const API = 'https://api-js401.herokuapp.com/api/v1/products';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
 
  let { type, payload } = action;
  switch (type) {
    case "electronics":
      let data = payload.filter((val) => val.category === type);
      return { type:"electronics", data: data };
    case "food":
      let data2 = payload.filter((val) => val.category === type);
      return { type:'food', data: data2 };
    default:
      return state;
  }
};

export const electronics = (type) => (dispatch,state) =>{
  return superagent.get(API).then(res=>{ 
    dispatch({
      type: type,
      payload:  res.body.results
    })
  }
  )
};

export const food = (type) => (dispatch,state) => {
  return superagent.get(API).then(res=>{ 
    dispatch({
      type: type,
      payload:  res.body.results
    })
  }
  )
};
