'use client'
import React from 'react'
import "./login.css";
import { useState, useEffect } from 'react';
import { Authservice } from '@/Services/Authservice';



const Login = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
  const data = await Authservice.getDummydata('data');
      setUsers(data);
      console.log('Users fetched:', data);
      setLoading(false);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="Images/NRI.jpeg" className="img-fluid" alt="Sample image" style={{ height: "300px", width: "500px" }} />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Form inputs and buttons */}
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {loading ? (
              <p>Loading...</p>
            ) : (
              users.length > 0 && (
                <div className="mt-4">
                  <h3>Users:</h3>
                  <ul>
                    {users.map(user => (
                      <li key={user.id}>
                        {user.name} - {user.email}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}

            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account? <a href="#!" className="link-danger">Register</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;