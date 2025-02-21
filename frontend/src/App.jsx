import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar/>
 <Hero/>
    </>
  )
}

export default App
