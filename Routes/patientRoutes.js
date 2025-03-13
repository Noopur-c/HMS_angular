import express from 'express';
import patientController from '../Controllers/patientcontroller.js';

const router = express.Router();

// Route to create a new patient
router.post('/', patientController.create);

// Route to fetch all patients
router.get('/', patientController.getAll);

// Route to fetch a patient by ID
router.get('/:id', patientController.getById);

// Route to update a patient by ID
router.put('/:id', patientController.update);

// Route to delete a patient by ID
router.delete('/:id', patientController.delete);

export default router;