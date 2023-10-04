import { RESET } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const reset = ()=>{
    return({
        type:RESET,
    })
}

export const updateReset = bindActionCreators(reset, store.dispatch)