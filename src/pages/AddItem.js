import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
const AddItem = ()=>{
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
           <div class="container mt-5 p-4 bg-white rounded shadow">
          <h2 class="text-center mb-4">ADD NEW SERIES</h2>
          <div class="mb-3">
              <label>Name</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,name:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Avatar (URL)</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,avatar:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>OTT Platform</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,ott:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Number of Episodes</label>
              <input type="number" class="form-control border-primary" onChange={(e)=>{setData({...data,noOfEps:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Number of Seasons</label>
              <input type="number" class="form-control border-primary" onChange={(e)=>{setData({...data,noOfSea:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Rating</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,rating:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Main Image (URL)</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,mainImage:e.target.value})}}/>
          </div>
          <div class="mb-3">
              <label>Main Info</label>
              <textarea class="form-control border-primary" rows="3" onChange={(e)=>{setData({...data,mainInfo:e.target.value})}}></textarea>
          </div>
          <div class="mb-3">
              <label>Trailer (URL)</label>
              <input type="text" class="form-control border-primary" onChange={(e)=>{setData({...data,trailer:e.target.value})}}/>
          </div>
          <button class="btn btn-primary btn-block" onClick={()=>{
              const apiURL = "https://66f274a771c84d80587551d2.mockapi.io/movie/"
              fetch(apiURL,
                {
                  method:'POST',
                  body:JSON.stringify(data),
                  headers:{
                    'Content-Type':'application/json'
                  }
                })
                .then(res=>res.json())
                .then(res=>{
                  navigate('/Home');
              })
          }}>Submit</button>
      </div>
  
        </>
      );
  }
  export default AddItem;