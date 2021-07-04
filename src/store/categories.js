import superagent from "superagent";

// let data;
// superagent
//   .get("https://api-js401.herokuapp.com/api/v1/products")
//   .then((results) => {
//     data = results.body.results;
//     console.log("🚀 ~ file: categories.js ~ line 8 ~ .then ~ data", data)
// });

// let initialState = data;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (state = null, action) => {
    console.log("🚀 ~ file: categories.js ~ line 15 ~ action", action)
    // console.log("🚀 ~ file: categories.js ~ line 15 ~ state", state)
    // console.log("🚀 ~ file: categories.js ~ line 15 ~ action")
await superagent.get("https://api-js401.herokuapp.com/api/v1/products")
.then((results) => {

    let { type } = action;
    switch (type) {
      case "electronics":
          let data = results.body.results.filter((val) => val.category === type);
          console.log("🚀 ~ file: categories.js ~ line 23 ~ .then ~ data", data)
        return { data: data };
      case "food":
          console.log("hello again")
        let data2 = results.body.results.filter((val) => val.category === type);
        console.log("🚀 ~ file: categories.js ~ line 29 ~ .then ~ data2", data2)
        return { data: data2 };
      default:
        return null;
    }
})
};

export const electronics = (type) => {
  return {
    type: type,
  };
};

export const food = (type) => {
  return {
    type: type,  };
};
