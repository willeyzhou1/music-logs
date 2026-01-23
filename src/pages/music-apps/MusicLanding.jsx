import React from 'react'
import FirstBeat from './tonejs-beats/FirstBeat'
import Chords from './tonejs-beats/Chords'
import * as Tone from 'tone'

export default function MusicLanding() {
  function PauseSound() {
    Tone.stop();
  }
  return (
    <div className='block'>
      <button className="text-3xl mx-auto my-6 bg-yellow-300 border-3 p-2 rounded-2xl w-[40%] h-18 block " onClick={PauseSound}>First Sound</button>
        <div className='w-full flex justify-center flex-wrap'>
        <button className="text-3xl mx-12 my-6 bg-yellow-300 border-3 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Sound</button>
        <button className="text-3xl mx-12 my-6 bg-yellow-300 border-3 p-2 rounded-2xl w-[40%] h-18" onClick={Chords}>Chord Samples</button>
        <button className="text-3xl mx-12 my-6 bg-yellow-300 border-3 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>
        <button className="text-3xl mx-12 my-6 bg-yellow-300 border-3 p-2 rounded-2xl w-[40%] h-18" onClick={FirstBeat}>First Beat</button>
    </div>
    </div>
  )
}
