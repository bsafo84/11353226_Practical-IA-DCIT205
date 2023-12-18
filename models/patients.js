const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
 patientID: Number,
 surname: String,
 othernames: String,
 gender: String,
 phoneNumber: String,
 residentialAddress: String,
 emergencyName: String,
 emergencyContact: String,
 relationshipWithPatient: String
});

module.exports = mongoose.model('Patient', PatientSchema);