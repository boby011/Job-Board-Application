import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      if (data.email === 'admin@gmail.com' && data.password === 'admin') {
        window.alert('Admin Login Success');
        localStorage.setItem('email', data.email);
        navigate('/admin');
      }

      else if (data.email === 'user@gmail.com' && data.password === 'user') {
        window.alert('User Login Success');
        localStorage.setItem('email', data.email);
        navigate('/user');
      }

      else {
        window.alert('Login Failed: Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      window.alert('Login Failed');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};
