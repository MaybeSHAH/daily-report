import React from 'react'
import sas_logo from "../assets/sas.png"
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <div className="item1">
                    <img src={sas_logo} alt="" />
                    <address>
                        58, Unit, Police Chowki, Shree Sant Dnyaneshwar Industrial Estate Plot 59,
                        no 08, Mohan Nagar Main Rd, near Mohanagar, D-II Block, MIDC, Pimpri-Chinchwad, Maharashtra 411019
                    </address>
                    <div>
                        <span className="dash-icons"><MdOutlineOpenInBrowser /></span>
                        <a href="https://www.sasautomation.in" target="_blank"> www.sasautomation.in</a>
                    </div>
                    <div>
                        <span className="dash-icons"><AiOutlineMail /></span>
                        <a href="">meraj@sasautomation.in</a>
                    </div>
                    <div>
                        <span className="dash-icons"><GoDeviceMobile /></span>
                        +91 9003292301
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home