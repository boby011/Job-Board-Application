const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
         
    },
    description: {
        type: String,
        
    },
    company: {
        type: String,
       
    },
    location: {
        type: String,
    },
});

let Job = mongoose.model('Job', jobSchema, 'job');
module.exports = Job;
