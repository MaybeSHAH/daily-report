import { USER_DETAILS_UPDATED, RESET} from "../constant/constant";

const initialState = {
    username: null,
    password: null,
    userType: null,
    e_id:null,
    employeename:null,
    jobrole:null,
    department:null,

}

const Auth = (state = initialState, { type, userDetails }) => {
    const  {id, emp_code,pswd, emp_name,emp_dsgn,dept,modifiedat,timeat,user_type } = userDetails || {}
    switch (type) {
        case USER_DETAILS_UPDATED:
            return { ...state, username:emp_code, password:pswd, userType:user_type, e_id:id, employeename:emp_name, jobrole:emp_dsgn, department:dept }
        case RESET:
            return {...initialState, username:state.username, password:state.password, userType:state.userType, e_id:state.e_id, employeename:state.employeename, jobrole:state.jobrole, department:state.department }
        default:
            return state
    }
}
export default Auth