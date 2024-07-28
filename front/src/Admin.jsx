import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export const Admin = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
  });

  const handleChange = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
  
    try {
      const postData = {
        title: jobData.title,
        description: jobData.description,
        company: jobData.company,
        location: jobData.location,
      };
  
      const response = await axios.post('http://localhost:3000/addjob', postData, {
      });
  
      if (response.data) {
        window.alert('Job added successfully');
        setJobData({
          title: '',
          description: '',
          company: '',
          location: '',
        });
      }
    } catch (error) {
      console.error('Error adding job:', error.message);
      window.alert('Failed to add job');
    }
  };
  

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>Add Job</h1>
          <div className="input-box">
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={jobData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Job Description:</label>
            <textarea
              name="description"
              placeholder="Job Description"
              rows={6}
              value={jobData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Company Name:</label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={jobData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={jobData.location}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  )
};
