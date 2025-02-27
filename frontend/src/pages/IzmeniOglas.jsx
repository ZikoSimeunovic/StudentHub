import React, { useState } from 'react';
import { PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import '../assets/css/izmenioglas.css';

function IzmeniO() {
  // State for form fields
   // State for form fields
   const [formData, setFormData] = useState({
    title: "Časovi programiranja",
    type: "usluge",
    price: "1500RSD",
    description: "Pozdrav, moje ime je Violeta i nudim privatne časove programiranja. U pitanju su jezici Java, Python..."
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="ad-container">
      <div className="ad-form-container">
        <h1 className="ad-title">Izmena oglasa</h1>
        
        <div className="ad-form">
          <div className="form-fields">
            <div className="form-group">
              <label className="form-label">Naziv oglasa:</label>
              <input 
                type="text" 
                name="title"
                className="form-input" 
                placeholder="Upišite naziv oglasa..." 
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Tip oglasa:</label>
              <select 
                className="form-input form-select" 
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="" disabled>Odaberite tip oglasa...</option>
                <option value="prodaja">Prodaja</option>
                <option value="kupovina">Kupovina</option>
                <option value="iznajmljivanje">Iznajmljivanje</option>
                <option value="usluge">Privatni časovi</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Cena:</label>
              <input 
                type="text" 
                name="price"
                className="form-input" 
                placeholder="Upišite cenu..." 
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Opis:</label>
              <textarea 
                name="description"
                className="form-input form-textarea" 
                placeholder="Dodajte opis oglasa..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          
          <div className="image-upload">
            <div className="upload-area">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Code on screen"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            
            <div className="image-navigation">
              <button className="nav-button">
                <ChevronLeft size={24} color="white" />
              </button>
              <button className="nav-button">
                <ChevronRight size={24} color="white" />
              </button>
            </div>
            
            <button className="image-change-button">
              Izmenite fotografije
            </button>
            
            <div className="button-container">
              <button className="button button-primary">Postavi oglas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IzmeniO;