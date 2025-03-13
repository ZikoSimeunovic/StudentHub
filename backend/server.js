import express from 'express';
import cors from 'cors'; // Uvezite cors paket
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import pool from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173', // Dozvolite pristup samo sa ovog origin-a
  credentials: true, // Dozvolite slanje kolačića
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

// Test ruta
app.get('/', (req, res) => {
  res.send('StudentHub Backend');
});

// Pokretanje servera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});