import React from 'react'
import "./styles/index.css"
import Login from "./component/Login"
import { connect } from 'react-redux/es/exports'
import UserDashboard from "./container/UserDashboard"
import AdminDashboard from "./container/AdminDashboard"

const App = ({username, password, userType}) => {


  return (
    <>
      {username && password? userType === "user"? <UserDashboard/>:<AdminDashboard/>:<Login/>}
    </>
  )
}

const withConnect = connect(
  state=>({
    username:state.Auth.username,
    password:state.Auth.password,
    userType:state.Auth.userType
  }),{}
)

export default (withConnect)(App)

