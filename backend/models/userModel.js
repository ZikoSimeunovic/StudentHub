import pool from '../config/db.js';

// Pronalaženje korisnika po korisničkom imenu ili email-u
export const getUserByUsernameOrEmail = async (usernameOrEmail) => {
  const query = 'SELECT * FROM users WHERE username = $1 OR email = $1';
  const values = [usernameOrEmail];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Kreiranje korisnika
export const createUser = async (userData) => {
  const { firstName, lastName, username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (first_name, last_name, username, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [firstName, lastName, username, email, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Provera postojećeg korisnika
export const checkExistingUser = async (username, email) => {
  const query = 'SELECT * FROM users WHERE username = $1 OR email = $2';
  const values = [username, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};