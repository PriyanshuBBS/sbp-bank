import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// if there are many reducers then it combined in this
const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;