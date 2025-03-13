import express from 'express';
import appointmentController from '../Controllers/appointmentcontroller.js';

const router = express.Router();

router.post('/', appointmentController.create);
router.get('/', appointmentController.getAll);

export default router;