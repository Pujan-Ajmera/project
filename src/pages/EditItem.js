import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const EditItem = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const apiURL = `http://localhost:3005/movie/${id}`; // Fixed URL

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

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch(apiURL, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) throw new Error('Failed to update item');
            await response.json(); // Handle the response if necessary
            navigate('/Home'); // Navigate to Home after submission
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='bg-dark'>
            <div className="container p-4 bg-white rounded shadow">
                <h2 className="text-center mb-4">EDIT SERIES</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditItem;
