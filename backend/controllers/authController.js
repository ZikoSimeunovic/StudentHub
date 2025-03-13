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

    // Postavite token u kolačić
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(200).json({
      message: 'Uspešno ste prijavljeni',
      token: token
    });
  } catch (error) {
    console.error(error); // Proverite ovu grešku u backend konzoli
    res.status(500).json({ error: 'Došlo je do greške pri prijavi' });
  }
};

// Provera statusa prijave
export const checkAuthStatus = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    // Verifikacija tokena
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ isAuthenticated: true, user: decoded });
  } catch (error) {
    res.status(200).json({ isAuthenticated: false });
  }
};

// Odjava korisnika
export const logoutUser = async (req, res) => {
  try {
    // Očisti token iz kolačića
    res.clearCookie('token');
    res.status(200).json({ message: 'Uspešna odjava' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Greška pri odjavi' });
  }
};