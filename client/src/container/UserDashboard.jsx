import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../component/Navbar";
import UserSidebar from "../component/UserSidebar";
import Home from "../component/Home"
import Footer from "../component/Footer"
import useWindowDimensions from '../component/Responsive';


const UserDashboard = () => {
  const [widthSidebar, setwidthSidebar] = useState()
  const {height, width} = useWindowDimensions()

  return (
    <>
      <BrowserRouter>
        <div style={{ height: "100vh" }}>
          <Navbar />
          <div style={{display:"flex",width: width, height:"90vh" }}>
            <UserSidebar setwidthSidebar={setwidthSidebar} />
            <div style={{ width: widthSidebar, background: "white", height:"95%" , borderBottom:"1px solid"}}>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />


                <Route path='*' element={<Home />} />
              </Routes>

            </div>
            <Footer/>
          </div>

        </div>

      </BrowserRouter>
    </>
  )
}

export default UserDashboard