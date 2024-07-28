const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Job = require('./models/job');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/JobPort')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const db = mongoose.connection;

app.use(express.json());
app.use(cors());

app.post('/addjob', async (req, res) => {
  const { title, description, company, location } = req.body;

  try {
    const newJob = new Job({
      title,
      description,
      company,
      location
    });

    const savedJob = await newJob.save();
    res.status(200).json(savedJob);
  } catch (error) {
    console.error('Error adding job:', error.message);
    res.status(500).json({ error: 'Failed to add job' });
  }
});


app.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.find({});
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
      res.status(500).json({ error: 'Failed to fetch jobs' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
