import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export const User = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobId) => {

    setAppliedJobs((prev) => ({ ...prev, [jobId]: true }));
    window.alert(`You applied for job with ID: ${jobId}`);
  };

  return (
    <div className="user-container">
      <h1 style={{ textAlign: 'center' }}>Available Jobs</h1>
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <button 
                className="btn"
                onClick={() => handleApply(job._id)}
                disabled={appliedJobs[job._id]} 
              >
                {appliedJobs[job._id] ? 'Applied' : 'Apply'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
