import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
const Contact = () => {
    const [data,setData] = useState({});
    return (
      <div width="100%" className='bg-dark'>
      <div style={contactStyles.container}>
        <h1 style={contactStyles.title}>Contact Me</h1>
        <section style={contactStyles.section}>
          <h2 style={contactStyles.subtitle}>Get in Touch</h2>
          <p style={contactStyles.paragraph}>
            I would love to hear from you! Whether you have a question, a suggestion, or just want to connect, feel free to reach out.
          </p>
        </section>
        <section style={contactStyles.section}>
          <h2 style={contactStyles.subtitle}>Contact Information</h2>
          <p style={contactStyles.paragraph}><strong>Email:</strong> pujan.ajmera@example.com</p>
          <p style={contactStyles.paragraph}><strong>Phone:</strong> +91 98765 43210</p>
          <p style={contactStyles.paragraph}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pujanajmera" style={contactStyles.link} target="_blank" rel="noopener noreferrer">linkedin.com/in/pujanajmera</a></p>
          <p style={contactStyles.paragraph}><strong>GitHub:</strong> <a href="https://github.com/pujanajmera" style={contactStyles.link} target="_blank" rel="noopener noreferrer">github.com/pujanajmera</a></p>
        </section>
        <section style={contactStyles.section}>
          <h2 style={contactStyles.subtitle}>Send a Message</h2>
          <form style={contactStyles.form}>
            <label style={contactStyles.label}>
              Name:
              <input type="text" placeholder="Your Name" style={contactStyles.input} required onChange={(e)=>{setData({...data,name:e.target.value})}}/>
            </label>
            <label style={contactStyles.label}>
              Email:
              <input type="email" placeholder="Your Email" style={contactStyles.input} required onChange={(e)=>{setData({...data,email:e.target.value})}}/>
            </label>
            <label style={contactStyles.label}>
              Message:
              <textarea placeholder="Your Message" style={contactStyles.textarea} required onChange={(e)=>{setData({...data,info:e.target.value})}}/>
            </label>
            <button type="submit" style={contactStyles.button}>Submit</button>
          </form>
          <p>{JSON.stringify(data)}</p>
        </section>
      </div>
      </div>
    );
  };
  
  const contactStyles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    section: {
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
    },
    subtitle: {
      fontSize: '1.8rem',
      marginBottom: '10px',
      color: '#007BFF',
    },
    paragraph: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '10px',
      fontSize: '1.1rem',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    textarea: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      minHeight: '100px',
    },
    button: {
      padding: '10px',
      fontSize: '1.1rem',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default Contact;