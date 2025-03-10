import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    requirements: [{
        type: String
    }],
    experienceLevel: {
        type: Number,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    jobType: {
        type: String,
        require: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        require: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    application: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
}, {timestamps: true})

export const Job = mongoose.model("Job", jobSchema)