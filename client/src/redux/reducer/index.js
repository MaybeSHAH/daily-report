import { combineReducers } from "redux";
import { RESET } from "../constant/constant";
import Auth from "./auth";
import Tab from "./tabsclick";
import Data from "./data";
import RowData from "./rowSelect";
const appReducer = combineReducers({
Auth,
Tab,
Data,
RowData
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer