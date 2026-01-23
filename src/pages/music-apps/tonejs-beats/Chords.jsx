import * as Tone from 'tone'

export default function Chords() {
    Tone.start().then(() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const chord1 = ["F3", "G#3", "C4", "D#4", "G4"]
        const chord2 = ["F3", "G#3", "B3", "D#4", "F4", "G#4"]
        Tone.loaded().then(() => {
            const now = Tone.now();
            chord1.forEach((note1, i) => {
                synth.triggerAttackRelease(note1, "2n", now + i * 0.05);
            });
            const chord1Length = chord1.length * 0.05 + 1;

            chord2.forEach((note2, j) => {
                synth.triggerAttackRelease(note2, "2n", chord1Length + now + j * 0.05);
            });
            // synth.triggerAttackRelease(chord1, "2n", now);
            // synth.triggerAttackRelease(chord2, "2n", now + 2.2);
        });
    });
};