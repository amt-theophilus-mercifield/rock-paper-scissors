const ruleBtn = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal-container");
const rulesModalBackground = document.getElementById("rules-modal-background");
const closeBtn = document.getElementById("close-btn");

const scoreValue = document.getElementById("score-value");
const playAgain = document.getElementById("play-again-button");


// Choice Variables 
const stepOne = document.getElementById("step-one");
const stepTwo = document.getElementById("step-two");
const stepTwoContainer = stepTwo.querySelector(".step-two-container");
const stepThreeContainer = stepTwo.querySelector(".step-three");
const statusWin = stepThreeContainer.querySelector(".status.win");
const statusLose = stepThreeContainer.querySelector(".status.lose");

// Display Choice Variables //
const playerSelection = document.querySelector("#player-selection");
const computerSelection = document.querySelector("#computer-selection");
const userIconWrapper = playerSelection.querySelector(".you.icon-wrapper");
const computerIconWrapper = computerSelection.querySelector(
  ".house.icon-wrapper"
);
const house = computerSelection.querySelector("house");

let score = 0;

/////////////////////////////////////////
//////// Listener on Each Choice ////////

const choiceContainer = document.querySelector(".step-one-container");

// Get User Choice //
choiceContainer.addEventListener("click", (e) => {
  if (!e.target.closest("div")) return;
  const userChoice = e.target.getAttribute("id");

  getComputerChoice(userChoice);
  showResults(userChoice, getComputerChoice(userChoice));
});

// Get Computer Choice //
function getComputerChoice(userChoice) {
  const possibleChoices = ["paper", "scissors", "rock"];
  let remainingChoices = 0;

  if (userChoice === "paper") {
    remainingChoices = ["scissors", "rock"];
  } else if (userChoice === "scissors") {
    remainingChoices = ["paper", "rock"];
  } else if (userChoice === "rock") {
    remainingChoices = ["scissors", "paper"];
  }

  // Generate a random choice for computer //

  const i = Math.floor(Math.random() * remainingChoices.length);
  const computerChoice = remainingChoices[i];

  return computerChoice;
}

function showResults(userChoice, computerChoice) {
  console.log(userChoice);
  console.log(computerChoice);

  let paperHtml = "<img src='extra/mobile-full-paper.svg' />";
  let scissorsHtml = "<img src='extra/mobile-full-scissors.svg' />";
  let rockHtml = "<img src='extra/mobile-full-rock.svg' />";
  let userWin;
  
  // Set Icon For User and Computer //
  function getUserWin(userWin) {
    if (userChoice === "paper") {
      userIconWrapper.innerHTML = paperHtml;

      if (computerChoice === "scissors") {
        computerIconWrapper.innerHTML = scissorsHtml;
        userWin = false;

      } else if (computerChoice === "rock") {
        computerIconWrapper.innerHTML = rockHtml;
        userWin = true;
      }
      
    } else if (userChoice === "scissors") {
      userIconWrapper.innerHTML = scissorsHtml;

      if (computerChoice === "rock") {
        computerIconWrapper.innerHTML = paperHtml;
        userWin = false;

      } else if (computerChoice === "paper") {
        computerIconWrapper.innerHTML = paperHtml;
        userWin = true;
      }

    } else if (userChoice === "rock") {
      userIconWrapper.innerHTML = rockHtml;

      if (computerChoice === "paper") {
        computerIconWrapper.innerHTML = paperHtml;
        userWin = false;

      } else if (computerChoice === "scissors") {
        computerIconWrapper.innerHTML = scissorsHtml;
        userWin = true;

      }
    }
    // house.classList.add("fadeAnimate");
    return userWin;
  };

(()=> {
  if (getUserWin() === true){
    console.log("User wins!");
    statusWin.style.display = "block";
    userIconWrapper.classList.add("win");
    // let score;
    score++;
    let newScore = score.toString();
    scoreValue.innerText = newScore;
  }
  else if (getUserWin() === false){
    console.log("Player lose!");
    statusLose.style.display = "block";
    computerIconWrapper.classList.add("win");
    //let score;
    score--;
    let newScore = score.toString();
    scoreValue.innerText = newScore;
  }
})();  


  // Display Both Choices //
  stepOne.style.display = "none";
  stepTwo.style.display = "flex";
  stepThreeContainer.style.visibility = "visible";

}

playAgain.addEventListener('click', (e) => {
  // if (!e.target.closest("div.play-again-button")) return;
  reset();
})

function reset(){
  stepOne.style.display = "flex";
  stepTwo.style.display = "none";
  stepThreeContainer.style.visibility = "hidden";

  statusWin.style.display = "none";
  userIconWrapper.classList.remove("win");
  statusLose.style.display = "none";
  computerIconWrapper.classList.remove("win");
}
  
/////////////////// Modal ///////////////////////

ruleBtn.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
  rulesModalBackground.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
  rulesModalBackground.classList.add("hidden");
});

rulesModalBackground.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
  rulesModalBackground.classList.add("hidden");
});
