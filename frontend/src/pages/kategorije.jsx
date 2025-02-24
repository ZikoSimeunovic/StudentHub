import "../assets/css/kategorija.css";

function Kategorija() {
  return (
    <div className="Kategorija">
      <h1 className="naslov">KATEGORIJE</h1>
      <div className="kategorija-container">
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Privatni časovi</p></div>
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Programiranje</p></div>
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Pisanje</p></div>
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Skripte</p></div>
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Događaji</p></div>
        <div className="kontent"><img src="../public/vite.svg" alt="alt" /><p>Drugo</p></div>
      </div>
    </div>
  );
}

export default Kategorija;
