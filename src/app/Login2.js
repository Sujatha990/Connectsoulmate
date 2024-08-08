"use client";
import { useState, useEffect, useRef } from 'react';
import { validateCredentials } from './ValidationUtlis';
import dummyData, { addNewUser } from './data/dummyData';
import Home1 from './Home1';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import NavBar3 from './NavBar3';
import Link from 'next/link';
import Footer from './Footer';

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); // State to store username
  const [navigate, setNavigate] = useState(false); // State to handle navigation

  const linkRef = useRef(null); // Ref for the Link component

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password
    };

    const user = validateCredentials(email, password);

    // Update dummyData by adding new user
    addNewUser(userData);

    // Store data in state
    setSubmittedData(userData);

    // Reset form fields after submission
    setEmail('');
    setPassword('');

    if (user) {
      setIsLoggedIn(true);
      setUsername(email.split('@')[0]); // Set username as the part before '@' in email
      setNavigate(true); // Trigger navigation
    } else {
      setError('Email and password do not match or user does not exist. Please register.');
    }
  };

  useEffect(() => {
    if (navigate) {
      // Simulate click on the Link component
      linkRef.current.click();
    }
  }, [navigate]);

  if (isLoggedIn) {
    return (
      <>
        <NavBar3 isLoggedIn={isLoggedIn} username={username} /> {/* Pass isLoggedIn and username to NavBar3 */}
        <NavBar2/>
        <Home1 />
        <Link href="/search2" ref={linkRef} style={{ display: 'none' }}>Search</Link> {/* Hidden Link for navigation */}
      </>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <NavBar style={{width:"100%", position:"relative"}}/>
      <NavBar2 style={{width:"100%", position:"relative"}}/>
        <div className="col-md-4">
          <h2 className="text-center" style={{paddingTop:"50px"}}>Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="d-flex flex-row align-items-center justify-content-center my-4">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary mx-1"
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary mx-1"
            >
              <i className="fab fa-google"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <hr className="text-center flex-grow-1" />
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
            <hr className="text-center flex-grow-1" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-lg"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0" style={{paddingBottom:"50px"}}>
                Don&apos;t have an account? <Link href="/register" className="link-danger">Register</Link>
              </p>
            </div>
          </form>
        </div>
      
      <Footer style={{width:"100%", position:"relative"}}/>
    </div>
  );
};

export default Login2;
