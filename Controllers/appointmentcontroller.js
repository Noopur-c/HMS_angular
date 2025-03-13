import { Appointment } from '../Models/index.js';

const appointmentController = {
  create: async (req, res) => {
    try {
      const appointment = await Appointment.create(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const appointments = await Appointment.findAll({ include: [Patient, Doctor] });
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default appointmentController;