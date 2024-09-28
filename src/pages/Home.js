import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
function Home(){
    const apiURL = "https://66f274a771c84d80587551d2.mockapi.io/movie";
    const [data,setdata] = useState([]);
    
    useEffect(()=>{
      fetch(apiURL, {method:"GET"})
      .then(res=>res.json())
      .then(res=>setdata(res));
  },[]);
    const formated = data.map((data)=>{
      return(
        <>
     <div className="d-flex justify-content-center bg-dark">
    <div className="card mb-3" style={{ maxWidth: '800px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.avatar} className="img-fluid rounded-start" alt="..." style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
              OTT:{data.ott}
              <br/>
              Episode:{data.noOfEps}
              <br/>
              Seasons:{data.noOfSea}
              <br/>
              Rating:{data.rating}
            </p>
            <p className="card-text m-2">
            <Link className="btn btn-outline-success m-3" to={"/DetailItem/"+data.id}>Know more</Link>
            <Link className="btn btn-outline-warning m-3" to={"/EditItem/"+data.id}>Edit</Link>
            <Link className="btn btn-outline-danger" to={"/DeleteItem/"+data.id}>delete</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
      );
    })
  
    return(
      <>
    <table className="table bg-dark">
        {formated}
        <Link className='btn btn-primary m-5' to={"/AddItem"}>Add New Series</Link>
      </table>
  </>   
    );
  }
  export default Home;