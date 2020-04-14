import { combineReducers } from "redux";
import AuthContainer from "../containers/AuthContainer";

const rootReducer = combineReducers({
       auth:AuthContainer
})

export default rootReducer;
