import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti"
import { NavLink } from "react-router-dom";
import sas_a from "../assets/sas.png"
import { store } from "../redux/store/store"
import { useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"
import { SiProgress, SiGoogleforms } from "react-icons/si"
import { BiSolidErrorCircle } from "react-icons/bi"
import { FaHistory } from "react-icons/fa"
import * as authActions from "../redux/action/auth"
import * as resetActions from "../redux/action/reset"
import * as tabsclicked from "../redux/action/tabsclick"
import { connect } from 'react-redux';
import { useEffect } from 'react';


const UserSidebar = ({ setwidthSidebar, updateAuth, updateReset, clicked, clickTab }) => {
    const [collapse, setCollapse] = useState(false);

    function handleToggle() {
        setCollapse(collapse => !collapse);
    }

    const handleLogoutSidebar = () => {
        updateAuth(null, null, null)
    }


    // Handle Store Reset on Chnage Routes


    const usePrevious = (value) => {
        const ref = React.useRef()
        React.useEffect(() => { ref.current = value })

        return ref.current
    }

    const useLocationChange = (action) => {
        const location = useLocation('/')
        const prevLocation = usePrevious(location)
        React.useEffect(() => {
            action(location, prevLocation)
        }, [location])
    }

    useLocationChange((location, prevLocation) => {
        console.log('changed from', prevLocation && prevLocation.pathname, 'to', location && location.pathname)
        if ((prevLocation && prevLocation.pathname) != (location && location.pathname)) {
                updateReset()
        }
    })





    collapse ? setwidthSidebar("96%") : setwidthSidebar("88%")
    return (
        <>
            <div className={collapse ? "sidebar close" : "sidebar"} >
                <div className="menu-icon" onClick={handleToggle}>
                    <TiThMenu />
                </div>
                <ul className="nav-links" >
                    <div>

                        <li>
                            <NavLink to={"/dashboard"}>
                                <a>
                                    <i className="FaHome single" ><FaHome /></i>
                                    <span className="link_name single">Dashboard</span>
                                </a>
                                <ul className="sub-menu blank">
                                    <li><a className="link_name single" href="#">Home</a></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/entry"}>
                                <a>
                                    <i className="FaHome single" ><SiGoogleforms /></i>
                                    <span className="link_name single">Entry</span>
                                </a>
                                <ul className="sub-menu blank">
                                    <li><a className="link_name single" href="#">Home</a></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/history"}>
                                <a>
                                    <i className="FaHome single" ><FaHistory /></i>
                                    <span className="link_name single">History</span>
                                </a>
                                <ul className="sub-menu blank">
                                    <li><a className="link_name single" href="#">Home</a></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/in-progress"}>
                                <a>
                                    <i className="FaHome single" ><SiProgress /></i>
                                    <span className="link_name single">In-Progress</span>
                                </a>
                                <ul className="sub-menu blank">
                                    <li><a className="link_name single" href="#">Home</a></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/issues"}>
                                <a>
                                    <i className="FaHome single" ><BiSolidErrorCircle /></i>
                                    <span className="link_name single">Issues</span>
                                </a>
                                <ul className="sub-menu blank">
                                    <li><a className="link_name single" href="#">Home</a></li>
                                </ul>
                            </NavLink>
                        </li>
                    </div>
                </ul>


                <div className='profile-details-content'>
                    <li >
                        <div className="profile-details">
                            <div className="profile-content ">
                                <img src={sas_a} alt="profileImg" />
                                <div>
                                    <div className="job">SAS</div>
                                    <div className="job">AUTOMATION</div>
                                </div>

                            </div>

                            <i className="menu-icon" onClick={() => handleLogoutSidebar()}>
                                <BiLogOut />
                            </i>
                        </div>
                    </li>
                </div>
            </div>

        </>
    )
}

const withConnect = connect(
    state => ({ clicked: state.Tab.clicked }),
    { ...authActions, ...resetActions, ...tabsclicked }
);

export default (withConnect)(UserSidebar);