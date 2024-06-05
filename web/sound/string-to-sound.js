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

function play() {
  const unicodeArray = getUnicodeArray(document.getElementById("text").value);

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();

  for (let i = 0; i < unicodeArray.length; i++) {
    const noteIndex = unicodeArray[i] % 7;
    synth.triggerAttackRelease(notes[noteIndex] + "5", "8n", now + i / 2);
  }
}

const notes = ["A", "B", "C", "D", "E", "F#", "G"];
