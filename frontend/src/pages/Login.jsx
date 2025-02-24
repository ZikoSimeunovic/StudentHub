import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import '../assets/css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted:', { username, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="login-overlay flex flex-col items-center">
        {/* Header */}
        <header className="login-header flex justify-between items-center px-4 w-full">
          <div className="login-logo">StudentHub</div>
          <div style={{ position: 'relative' }}>
  <LogIn className="text-blue-900 w-6 h-6" style={{ position: 'absolute', left: '97%',marginTop:"-25px",marginRight:'8px' }} />
</div>
        </header>

        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center w-full px-4">
          <div className="login-form-container">
            <h1 className="login-title">PRIJAVA</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="login-label">
                  Korisničko ime
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Unesite korisničko ime..."
                  className="login-input"
                />
              </div>

              <div>
                <label htmlFor="password" className="login-label">
                  Lozinka
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Unesite lozinku..."
                  className="login-input"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="login-checkbox"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                    Zapamti me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-white hover:text-blue-200">
                    Zaboravljena lozinka?
                  </a>
                </div>
              </div>

              <button type="submit" className="login-button">
                Prijavi se
              </button>

              <div className="text-center text-white mt-6">
                Nemaš nalog?{' '}
                <a href="#" className="login-register-link">
                  REGISTRUJ SE
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;