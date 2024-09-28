import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import './style.css';

const Layout = () => {
    return (
      <>
        <nav className="bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300">
              ScreenSavvy
            </Link>
            <div className="space-x-4">
              <Link to="/home" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
                Home
              </Link>
              <Link to="/About" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
                About
              </Link>
              <Link to="/Contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default Layout;