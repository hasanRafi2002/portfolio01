import "./index.css";
import { Outlet } from 'react-router-dom';

import React from 'react';
import Sidebar from "./rafi/SideBar";
import Navbar from "./rafi/NavBar";
import ParticleField from "./components/ParticleField";
import CustomCursor from "./components/CustomCursor";

const App22 = () => {
  return (
    <div className="relative flex min-h-screen overflow-y-scroll bg-[var(--bg-primary)] text-[var(--text-primary)] grid-bg">
      <ParticleField />
      <CustomCursor />

      <div className="relative z-10 flex">
        <Sidebar />
      </div>

      <div className="relative z-10 flex-1 min-h-screen transition-all duration-300 md:ml-72 md:mr-16">
        <Outlet />
      </div>

      <div className="relative z-10 flex-none">
        <Navbar />
      </div>
    </div>
  );
};

export default App22;
