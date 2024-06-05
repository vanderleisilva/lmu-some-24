// library docs:
// https://github.com/Tonejs/Tone.js
// https://tonejs.github.io/

function getUnicodeArray(text) {
  let unicodeArray = [];

  // Loop through each character in the input text
  for (let i = 0; i < text.length; i++) {
    // Get the Unicode value of the character using charCodeAt
    let unicodeValue = text.charCodeAt(i);

    // Add the Unicode value to the array
    unicodeArray.push(unicodeValue);
  }

  // Return the array of Unicode values
  return unicodeArray;
}

function play(key) {
  const unicode = key.charCodeAt(0);

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();

  const noteIndex = unicode % 7;
  synth.triggerAttackRelease(notes[noteIndex] + "5", "1", now);
}

document.getElementById("text").addEventListener("keypress", (event) => {
  play(event.key);
});

const notes = ["A", "B", "C", "D", "E", "F", "G"];
