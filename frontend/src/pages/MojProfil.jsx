import React from "react";
import "../assets/css/MojProfil.css";
import { Phone, Mail } from "lucide-react";

const MojProfil = () => {
  return (
    <div className="profil-container">
      <button className="nazad-dugme">⬅ Nazad</button>
      <h1 className="profil-naslov">Moj Profil</h1>

      <div className="profil-info">
        <img src="/majmun.jpg" alt="Profilna slika" className="profil-slika" />
        <h2 className="profil-ime">Majmun Majmunić</h2>
      </div>

      <p className="profil-opis">
        Ovo je moj profil. Ovdje možete pronaći informacije o meni i kako me kontaktirati. Ovo je moj profil. 
        Ovdje možete pronaći informacije o meni i kako me kontaktirati. Ovo je moj profil. Ovdje možete pronaći 
        informacije o meni i kako me kontaktirati.
      </p>

      <div className="kontakt-info">
        <p>Kontakt opcije</p>
        <p className="kontakt-text"><Mail size={20} color="white" />  mojemail@example.com</p>
        <p className="kontakt-text"><Phone size={20} color="white" /> Telefon: +123 456 789</p>
      </div>

      <div className="dugmad-container">
        <button className="dugme dugme-poruka">Moji oglasi</button>
        <button className="dugme dugme-pozovi">Sačuvaj profil</button>
      </div>
    </div>
  );
};

export default MojProfil;