import { TAB_CLICKED } from "../constant/constant";

const initialState = {
clicked:null
}

const Tab = (state = initialState, { type, flag }) => {
    switch (type) {
        case TAB_CLICKED:
            return { ...state, clicked:flag}
        default:
            return state
    }
}
export default Tab