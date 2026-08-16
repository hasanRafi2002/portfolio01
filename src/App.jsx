

import "./index.css";
import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';
import Sidebar from "./rafi/SideBar";
import Navbar from "./rafi/NavBar";


const App22 = () => {

  return (
    <div className="flex min-h-screen overflow-y-scroll bg-gray-100 ">
      {/* Left Sidebar */}
      <div className="flex ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen transition-all duration-300 md:ml-72 md:mr-16">
      <Outlet />
      </div>

      {/* Right Navbar */}
      <div className="flex-none">
        <Navbar />
      </div>

    </div>
  );
};

export default App22;
