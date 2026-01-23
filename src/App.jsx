import './App.css'
import { motion } from "motion/react"
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './pages/Header'
import Videos from './pages/Videos'
import MusicLanding from './pages/music-apps/MusicLanding'
import defaultImage from "./assets/images/frutiger-aero.webp"
import repeatingBackground from "./assets/images/repeating-background.jpg"
import dolphins from './assets/images/dolphins.gif'

function App() {
  const [background, setBackground] = useState(defaultImage)
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/music-logs/":
        setBackground(defaultImage);
        break;
      case "/music-logs/songs":
        setBackground(repeatingBackground);
        break;
      default:
        setBackground(defaultImage);
    }
  }, [location.pathname])

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
    
    <div className="min-h-screen text-[rgb(6,24,102)]"
    style={{
        background: `url(${background})`,
        backgroundSize: "100% 100%",
      }}>
      {/** Element to make dolphin follow cursor */}
      <motion.img 
      src={dolphins}
      alt="Swimming Dolphin"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y - 150,
      }}
      style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, filter: "drop-shadow(#60D5FF 0.7rem 0.7rem 7px)"}}
      />

      {/** Header */}
      <Header />
      
      <Routes>
        <Route path="/music-logs/" element={<Videos />} />
        <Route path="/music-logs/songs" element={<MusicLanding />} />
      </Routes>
    </div>
  )
}

export default App
