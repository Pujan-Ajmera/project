import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
const DetailItem = () => {
    const { id } = useParams();
    const apiURL = `https://66f274a771c84d80587551d2.mockapi.io/movie/${id}`;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiURL);
          if (!response.ok) throw new Error('Failed to fetch data');
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, [apiURL]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <>
        <style>
          {`
            .card {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
  
            .bg-light {
              background-color: #f8f9fa !important;
            }
  
            .btn-outline-secondary {
              transition: background-color 0.3s, color 0.3s;
            }
  
            .btn-outline-secondary:hover {
              background-color: #007bff;
              color: white;
            }
  
            table {
              width: 100%;
              margin: 1.5rem 0;
              border-collapse: collapse;
              border-radius: 0.5rem;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
  
            table th,
            table td {
              padding: 1rem;
              text-align: left;
              border: 2px solid #ff6f61; /* Coral border color */
            }
  
            table th {
              background-color: #ff6f61; /* Coral header color */
              color: white;
              font-weight: bold;
            }
  
            table tr:nth-child(even) {
              background-color: #e0f7fa; /* Light blue for even rows */
            }
  
            table tr:nth-child(odd) {
              background-color: #b2ebf2; /* Lighter blue for odd rows */
            }
  
            table tr:hover {
              background-color: #81d4fa; /* Bright hover effect */
              transition: background-color 0.3s;
            }
  
            .main-info {
              margin-top: 1.5rem;
              font-size: 1.1rem;
              line-height: 1.5;
            }
          `}
        </style>
        <div width="100%" className='bg-dark'>
        <Link to="/Home" className="btn btn-outline-secondary mb-4">Back</Link>
        <div className="bg-dark py-5">
          <div className="container">
            <div className="card mb-4">
              <img src={data.mainImage} className="card-img-top" alt={data.name} />
              <div className='m-2'>
                <a href={data.trailer}><button className='btn btn-primary' onClick={console.log(data.trailer)}>Trailer</button></a>
              </div>
              <div className="card-body text-center">
                <h2 className="text-danger">{data.name}</h2>
                <table>
                  <tbody>
                    <tr>
                      <th>OTT:</th>
                      <td>{data.ott}</td>
                    </tr>
                    <tr>
                      <th>Total Episodes:</th>
                      <td>{data.noOfEps}</td>
                    </tr>
                    <tr>
                      <th>Total Seasons:</th>
                      <td>{data.noOfSea}</td>
                    </tr>
                    <tr>
                      <th>Rating:</th>
                      <td>{data.rating}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="main-info">{data.mainInfo}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default DetailItem;