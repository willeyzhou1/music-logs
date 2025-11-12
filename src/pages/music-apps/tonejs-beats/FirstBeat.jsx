import React from 'react'
import * as Tone from 'tone'

export default function FirstBeat() {
  Tone.start().then(() => {
    const sampler = new Tone.Sampler({
      urls: {
        "D2": "D2.mp3",
        "B1": "B1.mp3"
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
    }).toDestination();
    Tone.loaded().then(() => {
      const now = Tone.now();
      sampler.triggerAttackRelease("D2", "1m", now);
      sampler.triggerAttackRelease("B1", "1m", now + 1);
    })
  })
}
