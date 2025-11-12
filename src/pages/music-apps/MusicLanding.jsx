import React from 'react'
import FirstBeat from './FirstBeat'

export default function MusicLanding() {
  return (
    <div className='w-full flex justify-center flex-wrap'>
      <button className="text-3xl mx-12 my-6 bg-yellow-300 border-4 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>
      <button className="text-3xl mx-12 my-6 bg-yellow-300 border-4 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>
      <button className="text-3xl mx-12 my-6 bg-yellow-300 border-4 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>
      <button className="text-3xl mx-12 my-6 bg-yellow-300 border-4 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>

    </div>
  )
}
