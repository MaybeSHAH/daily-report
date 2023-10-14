import { ROW_SELECT_FOR_CHANGE_STATUS } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const getRow = (rowdata, rowindex)=>{
    return({
        type:ROW_SELECT_FOR_CHANGE_STATUS,
        rowdata,
        rowindex
    })
}

export const selectRowData = bindActionCreators(getRow, store.dispatch)