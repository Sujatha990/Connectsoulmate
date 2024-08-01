'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import './login.css';
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
    try {
      const data = await Authservice.getDummydata('data');
      setUsers(data);
      console.log('Users fetched:', data);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission
    // Example: Send data to the server
    try {
      // await Authservice.login({ name, email, password });
      // Handle success
    } catch (err) {
      setError('Login failed');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <Image
              src="/Images/NRI.jpeg" // Ensure this path is correct and the image is in the public folder
              alt="Sample image"
              width={500} // Set the width of the image
              height={300} // Set the height of the image
              layout="responsive" // Adjust the layout as needed
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input 
                  type="text" 
                  id="name" 
                  className="form-control form-control-lg" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Name" 
                />
              </div>
              <div className="form-outline mb-4">
                <input 
                  type="email" 
                  id="email" 
                  className="form-control form-control-lg" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email" 
                />
              </div>
              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  id="password" 
                  className="form-control form-control-lg" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Login</button>
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
