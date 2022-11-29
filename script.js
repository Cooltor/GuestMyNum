"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number! ✋";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!🏆";
    document.querySelector("body").style.backgroundColor = "#82F6C8";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Try bigger! 👍";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "LOSER !!! 🤡";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Try smaller! 👎";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "LOSER !!! 🤡";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//document.querySelector(".again").addEventListener("click", function());
