import "../assets/css/hero.css";
import SearchBar from "../assets/searchbar";

function Hero() {
  return (
    <div className="Hero">
      <h1>STUDENTSKI OGLASI</h1>
      <p>Pronađiteeeeeeeeeeeee ili ponudite studentske usluge - od privatnih časova do ispitnih skripti</p>
      {/* Inline stil za Hero sa centriranjem */}
      <SearchBar 
        style={{ 
          position: 'relative', 
          width: '80%',   // Uzimamo širu širinu za Hero
          margin: '0 auto'  // Centriranje SearchBar
        }} 
      />
    </div>
  );
}

export default Hero;
