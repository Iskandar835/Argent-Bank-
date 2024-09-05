import { combineReducers } from "redux";
import postReducer, { authReducer } from "./post.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    postReducer,
   
})

export default rootReducer