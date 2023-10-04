import { combineReducers } from "redux";
import { RESET } from "../constant/constant";
import Auth from "./auth";
import Tab from "./tabsclick";

const appReducer = combineReducers({
Auth,
Tab
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer