import React from 'react';
import { PlusCircle } from 'lucide-react';
import '../assets/css/dodajoglas.css';

function Doglas() {
  return (
    <div className="ad-container">
    <div className="ad-form-container">
      <h1 className="ad-title">Dodavanje oglasa</h1>
      
      <div className="ad-form">
        <div className="form-fields">
          <div className="form-group">
            <label className="form-label">Naziv oglasa:</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Upišite naziv oglasa..." 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tip oglasa:</label>
            <select className="form-input form-select" defaultValue="">
              <option value="" disabled>Odaberite tip oglasa...</option>
              <option value="prodaja">Prodaja</option>
              <option value="kupovina">Kupovina</option>
              <option value="iznajmljivanje">Iznajmljivanje</option>
              <option value="usluge">Usluge</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Cena:</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Upišite cenu..." 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Opis:</label>
            <textarea 
              className="form-input form-textarea" 
              placeholder="Dodajte opis oglasa..."
            ></textarea>
          </div>
        </div>
        
        <div className="image-upload">
          <div className="upload-area">
            <PlusCircle className="upload-icon" />
            <span className="upload-text">Dodajte fotografiju</span>
          </div>
          
          <div className="button-container">
            <button className="button button-primary">Postavi oglas</button>
            <button className="button button-secondary">Sačuvaj nacrt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Doglas;