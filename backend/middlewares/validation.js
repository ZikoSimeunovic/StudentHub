export const validateRegistration = (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;
  
  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).json({ error: 'Sva polja su obavezna' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Nevalidan format email-a' });
  }

  next();
};
