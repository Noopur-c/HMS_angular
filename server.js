import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize, DataTypes } from 'sequelize';

import patientRoutes from './Routes/patientRoutes.js';
import doctorRoutes from './Routes/doctorRoutes.js';
import appointmentRoutes from './Routes/appointmentRoutes.js';

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Set up Sequelize and connect to MySQL database
const sequelize = new Sequelize('hospital_db', 'root', 'Noopur', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define Models
const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Doctor = sequelize.define('Doctor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Appointment = sequelize.define('Appointment', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

// Define Relationships
Patient.hasMany(Appointment);
Doctor.hasMany(Appointment);
Appointment.belongsTo(Patient);
Appointment.belongsTo(Doctor);

// Synchronize Models with Database
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

// Use route files
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
