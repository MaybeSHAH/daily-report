import React, { useRef } from 'react';
import login_logo from "../assets/sas.png";
import axios from 'axios';
import { connect } from 'react-redux';
import * as authActions from "../redux/action/auth"

const Login = ({updateAuth}) => {

    const username = useRef();
    const password = useRef();

    const handleLogin = async () => {
        try {
            const res = await axios.post(`http://192.168.0.220:3000/api/login`,
                {
                    employeeCode: username.current.value,
                    password: password.current.value
                });
            console.log(res.data)
            updateAuth(username.current.value,password.current.value,res.data.type)
        } catch (error) {
            // Handle errors
            console.log("error", error)
        }
    };

    return (
        <>
            <div className="login-container" align="center" >

                <div className="login-card" >
                    <img src={login_logo} alt="Organization Logo" />
                    <div className='title'>
                        <h2>Login</h2>
                        <h3>Enter your credentials</h3>
                    </div>
                    <form className="login-form">
                        <input
                            className="control"
                            type="text"
                            id='username'
                            placeholder="Username"
                            autoComplete="off"
                            ref={username}
                        />
                        <div className="password">
                            <input
                                className="control"
                                id="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                ref={password}
                            />
                        </div>

                        <div className='submit'>
                            <button className="control" type="button" onClick={() => handleLogin()}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


const withConnect = connect(
    state => ({}),
    { ...authActions },
);

export default (withConnect)(Login)
