import { ROW_SELECT_FOR_CHANGE_STATUS, RESET } from "../constant/constant";

const initialState = {
    rowdata:null,
    rowIndex:null

}

const RowData = (state = initialState, { type, rowdata,rowindex }) => {
    switch (type) {
        case ROW_SELECT_FOR_CHANGE_STATUS:
            return { ...state, rowdata, rowIndex:rowindex }
        case RESET:
            return initialState
        default:
            return state
    }
}
export default RowData