import * as Tone from 'tone'

export default function Chords() {
    Tone.start().then(() => {
        const synth = new Tone.Synth().toDestination();
        // const osc = new Tone.Oscillator(800, "sine").toDestination()
        Tone.loaded().then(() => {
              const now = Tone.now();
            //   osc.start()
              synth.triggerAttackRelease("D2", "8n", now);
              synth.triggerAttackRelease("B1", "8n", now + 0.75);
            })
    })
}