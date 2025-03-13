import React from 'react';
import { MapPin, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import '../assets/css/oglas.css';
import { Link } from "react-router-dom";
function Oglas() {
  return (
    <div className="containerr">
      <h1 className="title">Časovi Programiranja</h1>
      <div className="content">
        <div className="image-section">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
            alt="Programming code"
            className="code-image"
          />
          <div className="navigation">
            <button className="navv-button">
              <ChevronLeft size={24} />
            </button>
            <button className="navv-button">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="profile-card">
      {/* Ovo je komentar u JSX-u   <span className="price">1500 RSD</span> */} 
          <div className="profile-header">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              alt="Violeta"
              className="profile-image"
            />
            <h2 className="profile-name">Violeta</h2>
          </div>

          <p className="description">
            Studentkinja sam 4.godine Tehničkog Fakulteta "Mihajlo Pupin" u Zrenjaninu.
            Nudim časove iz programiranja, konkretno za jezike Python i Java. Svi zainteresovani
            mi se mogu javiti na broj telefona ispod.
          </p>

          <div className="contact">
            <strong>Kontakt:</strong> +381/64-3002409
          </div>

          <div className="footer">
            <div className="footer-item">
              <MapPin size={20} />
              Novi Sad
            </div>
            <div className="footer-item">
              <Clock size={20} />
              Pre 1 sat
            </div>
            <div className="rating">
              <Star size={20} fill="#2196f3" />
              4.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oglas;