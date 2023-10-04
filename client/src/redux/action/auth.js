import { USER_DETAILS_UPDATED } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const userDetails = (username, password,userType)=>{
    return({
        type:USER_DETAILS_UPDATED,
        username,password,userType
    })
}

export const updateAuth = bindActionCreators(userDetails, store.dispatch)