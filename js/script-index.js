const phrases = [
  "A person exists,",
  "Someone dwells in this reality,",
  "A human stands among us,"
];

let currentIndex = 0;
const dynamicText = document.querySelector(".dynamic-text");

function updateText() {
  dynamicText.textContent = phrases[currentIndex];
  currentIndex = (currentIndex + 1) % phrases.length;
}

setInterval(updateText, 10000);
updateText(); // Initialize
