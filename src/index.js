import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,Link, Outlet,useParams,useNavigate} from 'react-router-dom'
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Layout = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300">
            ScreenSavvy
          </Link>
          <div className="space-x-4">
            <Link to="/home" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
              Home
            </Link>
            <Link to="/About" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
              About
            </Link>
            <Link to="/Contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};


const Main = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Welcome to ScreenSavvy</h1>
        <p>Discover where to watch your favorite movies and series</p>
      </header>
      <main className="content">
        <section className="card">
          <div>
            <img src="data:image/jpeg;base64,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" ></img>
          </div>
          <Link to="/Home" className="navigate-button">
            Go to Home
          </Link>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 ScreenSavvy. All rights reserved.</p>
      </footer>

      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .main-container {
          background: linear-gradient(to right, #e66465, #9198e5);
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .header {
          padding: 50px 20px;
        }

        .content {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .card {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 20px;
          margin: 15px;
          width: 300px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .navigate-button {
          display: inline-block;
          background-color: #ff6347;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          padding: 10px 15px;
          transition: background-color 0.3s;
        }

        .navigate-button:hover {
          background-color: #ff4500;
        }

        .footer {
          margin-top: auto;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

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
   <div className="d-flex justify-content-center">
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
  <table className="table">
      {formated}
      <Link className='btn btn-primary m-5' to={"/AddItem"}>Add New Series</Link>
    </table>
</>   
  );
}

const About = () => {
  return (
    <div style={styles.container}>
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

const Contact = () => {
  const [data,setData] = useState({});
  return (
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
      <Link to="/Home" className="btn btn-outline-secondary mb-4">Back</Link>
      <div className="bg-light py-5">
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
    </>
  );
};



const DeleteItem = ()=>{
  const {id} = useParams();
  const navigate = useNavigate()
  const apiURL = "https://66f274a771c84d80587551d2.mockapi.io/movie/"+id;
  useEffect(()=>{
  fetch(apiURL,{method:'DELETE'})
  .then(res=>res.json())
},[])
  return(
    <>  
    </>
  );
}

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
    <div className="container mt-5 p-4 bg-white rounded shadow">
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
  );
};

root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element = {<Layout />}> 
  <Route path="/" element={<Main />} />
      <Route path="/Home" element = {<Home />} /> 
      <Route path="/About" element = {<About />} /> 
      <Route path="/Contact" element = {<Contact />} /> 
      <Route path="/DetailItem/:id" element = {<DetailItem />} />
      <Route path="/DeleteItem/:id" element = {<DeleteItem />} />
      <Route path="/AddItem" element = {<AddItem />} />
      <Route path="/EditItem/:id" element = {<EditItem />} />
  </Route>
</Routes>
</BrowserRouter>
);
