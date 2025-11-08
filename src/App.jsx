import './App.css'
import Header from './pages/Header'
import Videos from './pages/Videos'
import MusicLanding from './pages/music-apps/MusicLanding'
import { motion } from "motion/react"
import { useState, useEffect } from 'react'
import dolphins from './assets/images/dolphins.gif'
import { Routes, Route, Link } from 'react-router-dom'

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
      {/** Element to make dolphin follow cursor */}
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

        {/** Header */}
        <nav className='mb-4 flex pt-12 justify-center'>
          <Link to="/music-logs/" className='text-5xl'>Music Logs</Link>
          <Link to="/music-logs/apps" className='absolute top-12 right-24 text-2xl text-sky-400 bg-blue-400 p-2 rounded-2xl hover:bg-sky-200'>hehe</Link>
        </nav>
        
        <Routes>
          <Route path="/music-logs/" element={<Videos />} />
          <Route path="/music-logs/apps" element={<MusicLanding />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
