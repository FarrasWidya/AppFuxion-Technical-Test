import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  data: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "getdata":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
