let currentPuzzle = 1;

// Antwoorden per puzzel
const answers = {
  1: "1943", // Eerste computer
  2: "8",    // Hoeken van een achthoek
  3: "3600", // Seconden in een uur
  4: "12",   // Vierkantswortel van 144
  5: "100"   // Som van 45 en 55
};

// Controleer antwoorden
function checkAnswer(puzzleNumber) {
  const answer = document.getElementById(`answer${puzzleNumber}`).value.trim();
  if (answer === answers[puzzleNumber]) {
    alert("Goed gedaan! Je hebt deze puzzel opgelost.");
    nextPuzzle();
  } else {
    alert("Fout antwoord. Probeer opnieuw!");
  }
}

// Ga naar de volgende puzzel
function nextPuzzle() {
  document.getElementById(`puzzle${currentPuzzle}`).classList.add("hidden");
  currentPuzzle++;
  const nextPuzzle = document.getElementById(`puzzle${currentPuzzle}`);
  if (nextPuzzle) {
    nextPuzzle.classList.remove("hidden");
  } else {
    document.getElementById("final-message").classList.remove("hidden");
  }
}
