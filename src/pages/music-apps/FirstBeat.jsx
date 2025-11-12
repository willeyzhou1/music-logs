import React from 'react'
import * as Tone from 'tone'

export default function FirstBeat() {
  Tone.start().then(() => {
    const reverb = new Tone.Reverb(0).toDestination()
    const sampler = new Tone.Sampler({
      urls: {
        "D2": "D2.mp3",
        "B1": "B1.mp3"
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
    }).connect(reverb);
    Tone.loaded().then(() => {
      const now = Tone.now();
      sampler.triggerAttackRelease("D2", "2n", now);
      sampler.triggerAttackRelease("B1", "2n", now + 1);
    })
  })
}
