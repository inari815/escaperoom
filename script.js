let currentPuzzle = 1;

function checkAnswer(puzzleNumber) {
  const answer = document.getElementById(`answer${puzzleNumber}`).value.trim();
  if (puzzleNumber === 1 && answer === "1943") {
    nextPuzzle();
  } else if (puzzleNumber === 2 && answer === "8") {
    nextPuzzle();
  } else {
    alert("Fout antwoord. Probeer opnieuw!");
  }
}

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

function findKey() {
  alert("Gefeliciteerd, je hebt de sleutel gevonden!");
  document.getElementById("puzzle3").classList.add("hidden");
  document.getElementById("final-message").classList.remove("hidden");
}
