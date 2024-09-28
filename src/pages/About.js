import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import '../style.css';
const About = () => {
    return (
      <div width="100%" className='bg-dark'>
      <div style={styles.container} >
        <h1 style={styles.title}>About Me</h1>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Personal Information</h2>
          <p style={styles.paragraph}><strong>Name:</strong> Pujan Ajmera</p>
          <p style={styles.paragraph}><strong>University:</strong> Darshan University, Rajkot</p>
          <p style={styles.paragraph}><strong>Age:</strong> 20 years</p>
          <p style={styles.paragraph}><strong>Date of Birth:</strong> July 15, 2003</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Education</h2>
          <p style={styles.paragraph}>
            I am currently pursuing a degree in Computer Engineering, where I have developed a strong foundation in programming, data structures, and algorithms. My academic journey has allowed me to explore various fields, including web development, artificial intelligence, and software engineering.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Projects</h2>
          <ul style={styles.projectList}>
            <li style={styles.projectItem}>
              <strong>1. Smart Expense Tracker:</strong> A web application that helps users manage their expenses by categorizing and visualizing their spending habits.
            </li>
            <li style={styles.projectItem}>
              <strong>2. Online Learning Platform:</strong> Developed a platform that allows users to access various courses with features like quizzes and progress tracking.
            </li>
            <li style={styles.projectItem}>
              <strong>3. Chatbot Assistant:</strong> Created an AI-powered chatbot that provides instant answers to common queries for a local business.
            </li>
            <li style={styles.projectItem}>
              <strong>4. Portfolio Website:</strong> Designed and built a personal portfolio website to showcase my projects and skills using React and CSS.
            </li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Skills</h2>
          <p style={styles.paragraph}>
            I have gained proficiency in several programming languages and tools, including:
          </p>
          <ul style={styles.skillsList}>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Interests</h2>
          <p style={styles.paragraph}>
            Outside of academics, I am passionate about technology and enjoy exploring new advancements in AI and web development. I also love playing video games and hiking during my free time.
          </p>
        </section>
      </div>
      </div>
    );
  };
  
  const styles = {
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
    projectList: {
      listStyleType: 'disc',
      marginLeft: '20px',
    },
    projectItem: {
      fontSize: '1.1rem',
      marginBottom: '5px',
    },
    skillsList: {
      listStyleType: 'circle',
      marginLeft: '20px',
    },
  };
export default About;  