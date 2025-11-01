import './App.css'
import Header from './pages/Header'
import Videos from './pages/Videos'
import { motion } from "motion/react"
import { useState, useEffect } from 'react'
import dolphins from './assets/images/dolphins.gif'

function App() {
  function getMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    
    useEffect(() => {
      const updatePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY});
      };
      window.addEventListener('mousemove', updatePosition)

      return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return mousePosition
  }

  const mousePosition = getMousePosition();
  return (
    
    <div className="home-page">
      <div className="bg-[url('/src/assets/images/frutiger-aero.webp')] bg-[length:100%_100%] bg-no-repeat min-h-screen text-[rgb(6,24,102)]">
        <motion.img 
        src={dolphins}
        alt="Swimming Dolphin"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y - 150,
        }}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, filter: "drop-shadow(#60D5FF 0.7rem 0.7rem 7px)"}}
      />
        <Header />
        <Videos />
      </div>
    </div>
  )
}

export default App
