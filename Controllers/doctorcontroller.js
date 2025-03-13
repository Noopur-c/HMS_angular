import { Doctor } from '../Models/index.js';

const doctorController = {
  create: async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body);
      res.status(201).json(doctor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const doctors = await Doctor.findAll();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default doctorController;