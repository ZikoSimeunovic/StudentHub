import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { validateRegistration } from '../middlewares/validation.js';

const router = express.Router();

// Ruta za registraciju
router.post('/register', validateRegistration, registerUser);

// Ruta za login
router.post('/login', loginUser);

export default router;
