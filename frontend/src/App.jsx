import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import Kategorija from './pages/kategorije.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar/>
 <Hero/>
 <Kategorija/>
    </>
  )
}

export default App
