import { DATA_UPDATED } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const getData = (data, dataType)=>{
    return({
        type:DATA_UPDATED,
        data,
        dataType
    })
}

export const updateData = bindActionCreators(getData, store.dispatch)