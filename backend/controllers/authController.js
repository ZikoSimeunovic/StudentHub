import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, checkExistingUser, getUserByUsernameOrEmail } from '../models/userModel.js';

// Registracija korisnika
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;

    // Validacija
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Lozinke se ne podudaraju' });
    }

    // Provera postojećeg korisnika
    const existingUser = await checkExistingUser(username, email);
    if (existingUser) {
      return res.status(409).json({ error: 'Korisnik već postoji' });
    }

    // Kreiranje korisnika
    const newUser = await createUser({ firstName, lastName, username, email, password });
    
    res.status(201).json({
      message: 'Registracija uspešna',
      user: newUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Greška na serveru' });
  }
};

// Login korisnika
export const loginUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Proveriti postojanje korisnika
    const user = await getUserByUsernameOrEmail(usernameOrEmail);
    if (!user) {
      return res.status(404).json({ error: 'Korisnik nije pronađen' });
    }

    // Proveriti lozinku
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Pogrešna lozinka' });
    }

    // Generisati JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Uspešno ste prijavljeni',
      token: token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Greška na serveru' });
  }
};
