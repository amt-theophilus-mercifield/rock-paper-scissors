const ruleBtn = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal-container");
const rulesModalBackground = document.getElementById("rules-modal-background");
const closeBtn = document.getElementById("close-btn");

// Step Variables //
const stepOne = document.getElementById("step-one");
const stepTwo = document.getElementById("step-two");
const stepTwoContainer = document.querySelector(".step-two-container");
const stepThreeContainer = document.querySelector(".step-three");

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
  } 
  else if (userChoice === "scissors") {
    remainingChoices = ["paper", "rock"];
  }
  else if (userChoice === "rock") {
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

  // stepOne.style.display = "none";
  // stepTwo.style.display = "flex";

  // stepTwoContainer.style.display = "flex";
  // stepThreeContainer.style.display = "flex";
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
