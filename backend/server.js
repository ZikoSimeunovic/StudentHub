import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import pool from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
// Dodajte ispod postojećih middleware-ova

// Test ruta
app.get('/', (req, res) => {
  res.send('StudentHub Backend');
});

// Pokretanje servera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});