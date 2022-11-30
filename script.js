"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number! ✋");

    // player win
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!🏆");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#82F6C8";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      console.log(highscore);
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess < secretNumber
        ? displayMessage("Try bigger! 👍")
        : displayMessage("Try smaller! 👎");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("LOSER !!! 🤡");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textcontent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#edd6e5";
  document.querySelector(".number").style.width = "15rem";
});
