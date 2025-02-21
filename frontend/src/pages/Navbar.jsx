import "../assets/css/navbar.css";
import SearchBar1 from "../assets/searchbar1";

function NavBar() {
  return (
    <div className="NavBar" style={{ position: 'relative' }}>
      <h1>StudentHub</h1>
      {/* Inline stil za NavBar, koristi absolute za precizno pozicioniranje */}
      
 
      <SearchBar1  />
      <button type="submit" className="prijava-btn">Prijava</button>
    </div>
  );
}

export default NavBar;
