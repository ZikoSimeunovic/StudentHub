import express from 'express';
import { registerUser, loginUser, logoutUser, checkAuthStatus } from '../controllers/authController.js';
import { validateRegistration } from '../middlewares/validation.js';

const router = express.Router();

// Ruta za registraciju
router.post('/register', validateRegistration, registerUser);

// Ruta za login
router.post('/login', loginUser);

// Ruta za proveru statusa prijave
router.get('/status', checkAuthStatus);

// Ruta za odjavu
router.post('/logout', logoutUser);

export default router;