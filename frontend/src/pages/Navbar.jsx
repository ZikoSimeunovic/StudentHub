import "../assets/css/navbar.css";
import SearchBar1 from "../assets/searchbar1";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { useState, useEffect } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Provera statusa prijave sa backend-a
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/auth/status", { credentials: "include" });
        const data = await response.json();
        setIsLoggedIn(data.isAuthenticated);
      } catch (error) {
        console.error("Greška pri proveri statusa prijave", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Greška pri odjavi", error);
    }
  };

  return (
    <div className="NavBar" style={{ position: "relative" }}>
      <h1>StudentHub</h1>
      <SearchBar1 />
      
      <div className="settings-container" onClick={() => setShowMenu(!showMenu)}>
        <Settings />
        {showMenu && (
          <div className="dropdown-menu">
            {isLoggedIn ? (
              <>
                <Link to="/profile">Profil</Link>
                <Link to="/settings">Podešavanja</Link>
                <Link to="/add-ad">Dodaj oglas</Link>
                <button onClick={handleLogout}>Odjava</button>
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
