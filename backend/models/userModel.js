const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //personal details
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum:['Male', 'Female', 'Other'],
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    //Blood Information
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    },
    availability: {
        type: Boolean,
        default: true
    },
    //contact details
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },

    
    password: {
        type: String,
        required: true
    },
    
    
    
    //report photo upload and save in db
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
