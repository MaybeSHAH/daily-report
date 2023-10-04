import React from 'react'
import logosas from "../assets/sas-dark.png";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className="navbar">
            <button type='button' className="navbar-brand">
                <img src={logosas} alt="SG LOGO" />
            </button>
            <div className="head-title">
                SAS AUTOMATION PVT LTD
            </div>
            <button className='user'>
                <BiSolidUserCircle/>
            </button>

        </nav>
    )
}
export default Navbar;