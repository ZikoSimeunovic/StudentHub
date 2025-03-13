
import { useState } from 'react';
import NavBar from './pages/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import Kategorija from './pages/kategorije.jsx';
import Noglas from './pages/NoviOglasi.jsx';
import Login from './pages/Login.jsx';
import Reg from './pages/Reg.jsx';
import MojProfil from './pages/MojProfil.jsx';
import Oglas from './pages/Oglas.jsx';
import Doglas from './pages/DodajOglas.jsx';
import IzmeniO from './pages/IzmeniOglas.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Corrected variable name
  const hideNavbar = ['/login', '/reg'].includes(location.pathname); // Fixed syntax

  return (
    <>
      {!hideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Kategorija/>
            <Noglas/>
          </>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/mojprofil" element={<MojProfil />} />
        <Route path="/oglas" element={<Oglas />} />
        <Route path="/dodajoglas" element={<Doglas />} />
        <Route path="/izmenioglas" element={<IzmeniO />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppWrapper />;
}

export default App;