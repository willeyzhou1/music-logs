import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='mb-4 flex pt-12 justify-center'>
      <Link to="/music-logs/" className='text-5xl'>Music Logs</Link>
      <Link to="/music-logs/songs" className='absolute top-10 right-24 text-2xl text-sky-400 bg-blue-700 p-2 rounded-2xl border-4 border-blue-900 hover:bg-sky-200'>To Music Projects</Link>
    </nav>
  )
}
