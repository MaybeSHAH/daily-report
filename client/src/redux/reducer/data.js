import { DATA_UPDATED, RESET } from "../constant/constant";

const initialState = {
    data: [],
    dataType:null

}

const Data = (state = initialState, { type, data, dataType }) => {
    switch (type) {
        case DATA_UPDATED:
            return { ...state, data, dataType }
        case RESET:
            return initialState
        default:
            return state
    }
}
export default Data