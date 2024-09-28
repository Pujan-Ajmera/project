import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import './style.css';
import Layout from './Layout'
import Main from './pages/Main'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DetailItem from './pages/DetailItem'
import DeleteItem from './pages/DeleteItem'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element = {<Layout />}> 
  <Route path="/" element={<Main />} />
      <Route path="/home" element = {<Home />} /> 
      <Route path="/About" element = {<About />} /> 
      <Route path="/Contact" element = {<Contact />} /> 
      <Route path="/DetailItem/:id" element = {<DetailItem />} />
      <Route path="/DeleteItem/:id" element = {<DeleteItem />} />
      <Route path="/AddItem" element = {<AddItem />} />
      <Route path="/EditItem/:id" element = {<EditItem />} />
  </Route>
</Routes>
</BrowserRouter>
);
