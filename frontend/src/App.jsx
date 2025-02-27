import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import Kategorija from './pages/kategorije.jsx'
import Noglas from './pages/NoviOglasi.jsx'
import Login from './pages/Login.jsx'
import Reg from './pages/Reg.jsx'
import MojProfil from './pages/MojProfil.jsx'
import Oglas from './pages/Oglas.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar/>
 <Hero/>
 <Kategorija/>
<Noglas/>
<Login></Login>
<Reg></Reg>
<MojProfil></MojProfil>
<Oglas></Oglas>
    </>
  )
}

export default App
