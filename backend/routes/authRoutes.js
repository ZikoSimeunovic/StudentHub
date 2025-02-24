import express from 'express';
import { registerUser } from '../controllers/authController.js';
import { validateRegistration } from '../middlewares/validation.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/register', validateRegistration, registerUser);
export default router;