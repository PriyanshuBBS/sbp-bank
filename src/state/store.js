import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// {} keeping the inital state empty
// redux-thunk helps to execute async functions
export const store = createStore(reducers,{},applyMiddleware(thunk))