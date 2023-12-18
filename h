const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Patient = require('./models/Patient');
const Encounter = require('./models/Encounter');
const app = express();

mongoose.connect('mongodb://localhost/hms', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

app.use(bodyParser.json());

app.post('/patients', async (req, res) => {
 const patient = new Patient(req.body);
 await patient.save();
 res.send(patient);
});

app.get('/patients', async (req, res) => {
 const patients = await Patient.find();
 res.send(patients);
});

app.get('/patients/:id', async (req, res) => {
 const patient = await Patient.findById(req.params.id);
 res.send(patient);
});