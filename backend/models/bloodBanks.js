const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  contact: {
    phone: { type: String, required: true },
    email: { type: String },
  },
  operatingHours: {
    open: { type: String, required: true }, // e.g., "09:00 AM"
    close: { type: String, required: true }, // e.g., "06:00 PM"
  },
  bloodStock: {
    A_positive: { type: Number, default: 0 },
    A_negative: { type: Number, default: 0 },
    B_positive: { type: Number, default: 0 },
    B_negative: { type: Number, default: 0 },
    O_positive: { type: Number, default: 0 },
    O_negative: { type: Number, default: 0 },
    AB_positive: { type: Number, default: 0 },
    AB_negative: { type: Number, default: 0 },
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

module.exports = BloodBank;
