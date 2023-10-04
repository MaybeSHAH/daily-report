import { USER_DETAILS_UPDATED, RESET} from "../constant/constant";

const initialState = {
    username: null,
    password: null,
    userType: null
}

const Auth = (state = initialState, { type, username, password, userType }) => {
    switch (type) {
        case USER_DETAILS_UPDATED:
            return { ...state, username, password, userType }
        case RESET:
            return {...initialState, username:state.username, password:state.password, userType:state.userType}
        default:
            return state
    }
}
export default Auth