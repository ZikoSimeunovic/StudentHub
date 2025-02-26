import React from "react";
import "../assets/css/MojProfil.css";

const MojProfil = () => {
  return (
    <div className="profil-container">
      <button className="nazad-dugme">Nazad</button>
      <h1 className="profil-naslov">Moj Profil</h1>

      <div className="profil-info">
        <img src="https://via.placeholder.com/150" alt="Profilna slika" className="profil-slika" />
        <h2 className="profil-ime">Ime Prezime</h2>
      </div>

      <p className="profil-opis">
        Ovo je moj profil. Ovdje možete pronaći informacije o meni i kako me kontaktirati.
      </p>

      <div className="kontakt-info">
        <p>Kontakt opcije</p>
        <p className="kontakt-text">Email: mojemail@example.com</p>
        <p className="kontakt-text">Telefon: +123 456 789</p>
      </div>

      <div className="dugmad-container">
        <button className="dugme dugme-poruka">Poruka</button>
        <button className="dugme dugme-pozovi">Pozovi</button>
      </div>
    </div>
  );
};

export default MojProfil;