import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import "../assets/css/novioglas.css"
import { Link } from "react-router-dom";

const listings = [
  {
    title: "Časovi iz Mehanike",
    description: "Iskusan student drži časove iz mehanike. Pristupačna cena i fleksibilni termini. Prvi čas...",
    price: 1500,
    location: "Novi Sad",
    timeAgo: "Pre 2 sata",
    rating: 4.8
  },
  {
    title: "Skripta iz Algebre",
    description: "Skripta za polaganje ispita iz predmeta Algebra. Student sam smera Informacione Tehnologija...",
    price: 2000,
    location: "Zrenjanin",
    timeAgo: "Pre 3 sata",
    rating: 5.0
  },
  {
    title: "Brucošijada",
    description: "Brucošijada Medicinskog fakulteta u Novom Sadu. Svi studenti su dobrodošli na najluđu žurku u...",
    price: 1000,
    location: "Novi Sad",
    timeAgo: "Pre 1 sat",
    rating: 5.0
  },
  {
    title: "Pisanje CV-a",
    description: "Profesionalno pisanje CV-a uz mogućnost pisanja motivacionog pisma...",
    price: 3000,
    location: "Beograd",
    timeAgo: "Pre 4 sata",
    rating: 4.0
  }
];

function Noglas() {
  return (
    <>

    <div className="header">
    <h1>Najnoviji oglasi</h1>
    <a href="#">Pogledaj sve...</a>
  </div>
    <div className='pozadina-oglas'>   <div className="container">
      <div className="content">
      

     <div className="listings-grid">
          {listings.map((listing, index) => (
            <div key={index} className="listing-card">
              <div className="listing-content">
                <div className="listing-header">
                  <h2 className="listing-title">{listing.title}</h2>
                  <div className="listing-price">
                    {listing.price} RSD
                  </div>
                </div>
                
                <p className="listing-description">{listing.description}</p>
                
                <div className="listing-footer">
                  <div className="listing-metadata">
                    <div className="metadata-item">
                      <MapPin />
                      <span>{listing.location}</span>
                    </div>
                    <div className="metadata-item">
                      <Clock />
                      <span>{listing.timeAgo}</span>
                    </div>
                  </div>
                  <div className="rating">
                    <Star className="fill-current" />
                    <span>{listing.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="post-button">
  <Link to="/dodajoglas">
    <button>Postavite oglas</button>
  </Link>
</div>
        </div>
      </div>
    </div></>
  );
}

export default Noglas;
