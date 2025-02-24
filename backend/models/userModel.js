import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

export const createUser = async (userData) => {
  const { firstName, lastName, username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = `
    INSERT INTO users (first_name, last_name, username, email, password_hash)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, username, email
  `;
  
  const values = [firstName, lastName, username, email, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const checkExistingUser = async (username, email) => {
  const query = `
    SELECT * FROM users 
    WHERE username = $1 OR email = $2
  `;
  const result = await pool.query(query, [username, email]);
  return result.rows[0];
};