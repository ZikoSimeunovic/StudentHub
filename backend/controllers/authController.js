import { createUser, checkExistingUser } from '../models/userModel.js';

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