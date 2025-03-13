import express from 'express';
import doctorController from '../Controllers/doctorcontroller.js';

const router = express.Router();

router.post('/', doctorController.create);
router.get('/', doctorController.getAll);

export default router;