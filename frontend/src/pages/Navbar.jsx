import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, PlusCircle, LogOut } from "lucide-react";
import SearchBar1 from '../assets/searchbar1';
import "../assets/css/navbar.css";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Provera statusa prijave prilikom učitavanja komponente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Korisnik je prijavljen
    } else {
      setIsLoggedIn(false); // Korisnik nije prijavljen
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      localStorage.removeItem('token'); // Uklonite token
      setIsLoggedIn(false); // Ažurirajte stanje
      window.location.href = '/'; // Redirektuj korisnika
    } catch (error) {
      console.error('Greška pri odjavi', error);
    }
  };

  return (
    <div className="NavBar" style={{ position: 'relative' }}>
      <h1>StudentHub</h1>
      <SearchBar1 />

      <div className="settings-container" onClick={() => setShowMenu(!showMenu)}>
        <Settings />
        {showMenu && (
          <div className="dropdown-menu">
            {isLoggedIn ? (
              <>
               <Link to="/mojprofil">
  <User size={18} /> Profil
</Link>
<Link to="/podesavanja">
  <Settings size={18} /> Podešavanja
</Link>
<Link to="/dodajoglas">
  <PlusCircle size={18} /> Dodaj oglas
</Link>
<button onClick={handleLogout}>
  <LogOut size={18} /> Odjava
</button>
              </>
            ) : (
              <>
                <Link to="/login">Prijavite se</Link>
                <Link to="/reg">Registrujte se</Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;