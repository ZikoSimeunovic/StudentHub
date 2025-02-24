import React, { useState } from 'react'

import "../assets/css/reg.css"

import { Eye, EyeOff } from 'react-feather'; // Pretpostavljam da koristiš ove ikone

function Reg() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="header">
          <h1 className="header-title">StudentHub</h1>
         
        </div>
        
        <h2 className="form-title">REGISTRACIJA</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Unesite ime..."
                className="form-input"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Unesite prezime..."
                className="form-input"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          </div>

          <input
            type="text"
            name="username"
            placeholder="Unesite korisničko ime..."
            className="form-input"
            onChange={handleChange}
            value={formData.username}
          />

          <input
            type="email"
            name="email"
            placeholder="Unesite e-mail adresu..."
            className="form-input"
            onChange={handleChange}
            value={formData.email}
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Unesite lozinku..."
              className="form-input"
              onChange={handleChange}
              value={formData.password}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Potvrdi lozinku..."
              className="form-input"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className="submit-button">
            Registruj se
          </button>

          <p className="login-text">
            Imate nalog?
            <a href="#" className="login-link">
              PRIJAVI SE
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Reg;
