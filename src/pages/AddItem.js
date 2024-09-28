import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const AddItem = () => {
    const [data, setData] = useState({
        name: '',
        avatar: '',
        ott: '',
        noOfEps: '',
        noOfSea: '',
        rating: '',
        mainImage: '',
        mainInfo: '',
        trailer: '',
        id: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const apiURL = "http://localhost:3005/movie"; // Ensure the URL is correct
        try {
            // Basic validation
            if (!data.name || !data.id) {
                setError("Name and Unique ID are required.");
                return;
            }

            const response = await fetch(apiURL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Failed to add item');
            await response.json();
            navigate('/Home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container mt-5 p-4 bg-white rounded shadow">
            <h2 className="text-center mb-4">ADD NEW SERIES</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <label>Name</label>
                <input type="text" name="name" className="form-control border-primary" value={data.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Avatar (URL)</label>
                <input type="text" name="avatar" className="form-control border-primary" value={data.avatar} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>OTT Platform</label>
                <input type="text" name="ott" className="form-control border-primary" value={data.ott} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Number of Episodes</label>
                <input type="number" name="noOfEps" className="form-control border-primary" value={data.noOfEps} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Number of Seasons</label>
                <input type="number" name="noOfSea" className="form-control border-primary" value={data.noOfSea} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Rating</label>
                <input type="text" name="rating" className="form-control border-primary" value={data.rating} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Main Image (URL)</label>
                <input type="text" name="mainImage" className="form-control border-primary" value={data.mainImage} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Main Info</label>
                <textarea name="mainInfo" className="form-control border-primary" rows="3" value={data.mainInfo} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
                <label>Trailer (URL)</label>
                <input type="text" name="trailer" className="form-control border-primary" value={data.trailer} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Unique ID</label>
                <input type="text" name="id" className="form-control border-primary" value={data.id} onChange={handleChange} />
            </div>
            <button className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddItem;
