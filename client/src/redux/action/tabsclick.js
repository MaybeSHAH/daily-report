import { TAB_CLICKED } from "../constant/constant";
import {store} from "../store/store"
import { bindActionCreators } from "redux";

const tabClicked = (flag)=>{
    return({
        type:TAB_CLICKED,
        flag
    })
}

export const clickTab = bindActionCreators(tabClicked, store.dispatch)