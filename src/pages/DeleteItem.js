import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';

const DeleteItem = ()=>{
    const {id} = useParams();
    const navigate = useNavigate()
    const apiURL = "https://66f274a771c84d80587551d2.mockapi.io/movie/"+id;
    useEffect(()=>{
    fetch(apiURL,{method:'DELETE'})
    .then(res=>res.json())
    .then(res=>{
      navigate('/Home')
    })
  },[])
    return(
      <>  
      </>
    );
  }
  
export default DeleteItem;  