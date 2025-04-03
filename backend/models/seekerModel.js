const mongoose = require('mongoose');

const seekerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bloodGroupRequired: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    },
    city: {
        type: String,
        required: true
    },
    hospitalName: {
        type: String,
        required: true
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Fulfilled'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Seeker', seekerSchema);
