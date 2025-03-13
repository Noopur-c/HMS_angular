// Controllers/patientController.js
import { Patient } from '../Models/index.js';

const patientController = {
  // Create a new patient
  create: async (req, res) => {
    try {
      const patient = await Patient.create(req.body);
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Fetch all patients
  getAll: async (req, res) => {
    try {
      const patients = await Patient.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Fetch a single patient by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await Patient.findByPk(id);
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update patient details
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Patient.update(req.body, { where: { id } });
      if (updated[0]) {
        res.status(200).json({ message: 'Patient updated successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a patient by ID
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Patient.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ message: 'Patient deleted successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default patientController;