import { combineReducers } from "redux";
import Auth from "./auth";

const appReducer = combineReducers({
Auth
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer