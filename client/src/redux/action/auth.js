import { USER_DETAILS_UPDATED } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const userDetails = (userDetails)=>{
    return({
        type:USER_DETAILS_UPDATED,
        userDetails
    })
}

export const updateAuth = bindActionCreators(userDetails, store.dispatch)