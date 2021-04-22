// let synth = new Tone.Player("/samples/congas.m4a");

// Granular Synthesis allows you to change playback rate independently from pitch
let synth = new Tone.GrainPlayer("samples/congas.m4a");

// Amount of time each small chunk of audio is played for
// grainSize:0.2

// Amount of crossfading transition time between successive grains
// overlap:0.1


synth.loop = true;
synth.autoStart = true;
synth.toMaster();

function setup() {

}

function draw() {
  synth.playbackRate = map(mouseX, 0, width, 0.5, 1);
  synth.detune = map(mouseY, 0, height, 100, 0);
}
