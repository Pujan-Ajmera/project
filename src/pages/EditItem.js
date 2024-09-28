
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
const EditItem = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const apiURL = `https://66f274a771c84d80587551d2.mockapi.io/movie/${id}`;
  
    useEffect(() => {
      fetch(apiURL)
        .then(res => res.json())
        .then(res => setData(res));
    }, [apiURL]);
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      fetch(apiURL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(() => navigate('/Home'));
    };
  
    return (
      <div width="100%" className='bg-dark'>
      <div className="container p-4 bg-white rounded shadow">
        <h2 className="text-center mb-4">EDIT SERIES</h2>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control border-primary" value={data.name || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Avatar (URL)</label>
          <input type="text" name="avatar" className="form-control border-primary" value={data.avatar || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>OTT Platform</label>
          <input type="text" name="ott" className="form-control border-primary" value={data.ott || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Number of Episodes</label>
          <input type="number" name="noOfEps" className="form-control border-primary" value={data.noOfEps || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Number of Seasons</label>
          <input type="number" name="noOfSea" className="form-control border-primary" value={data.noOfSea || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Rating</label>
          <input type="text" name="rating" className="form-control border-primary" value={data.rating || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Main Image (URL)</label>
          <input type="text" name="mainImage" className="form-control border-primary" value={data.mainImage || ''} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Main Info</label>
          <textarea name="mainInfo" className="form-control border-primary" rows="3" value={data.mainInfo || ''} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label>Trailer (URL)</label>
          <input type="text" name="trailer" className="form-control border-primary" value={data.trailer || ''} onChange={handleChange} />
        </div>
        <button className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    );
  };
export default EditItem;  