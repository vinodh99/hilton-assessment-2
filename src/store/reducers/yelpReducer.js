// import * as types from "../actionTypes/types";

const initialState = {};

const yelpReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.GET_DATA:
    //   return {
    //     ...state,
    //     data: action.payload
    //   };
    // case types.SET_DATA:
    //   return {
    //     ...state,
    //     data: [...state.data, ...action.payload]
    //   };

    default:
      return state;
  }
};
export default yelpReducer;
