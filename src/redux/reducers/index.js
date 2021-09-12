import jobReducer from "./job";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    job: jobReducer,
});

export default rootReducer;