import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const DeleteItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const apiURL = `http://localhost:3005/movie/${id}`; // Fixed URL

    useEffect(() => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) {
            navigate('/Home'); // If user cancels, redirect to Home
            return;
        }

        const deleteItem = async () => {
            try {
                const response = await fetch(apiURL, { method: 'DELETE' });
                if (!response.ok) {
                    throw new Error('Failed to delete item');
                }
                await response.json(); // Handle the response if necessary
                navigate('/Home'); // Navigate to Home after deletion
            } catch (error) {
                console.error(error);
                alert('Error deleting item: ' + error.message); // Notify the user
                navigate('/Home'); // Redirect to Home on error
            }
        };

        deleteItem();
    }, [apiURL, navigate]);

    return null; // No UI to display
};

export default DeleteItem;
