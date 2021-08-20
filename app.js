// variables
let userScore = 0;
let pcScore = 0;

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

const userScore_span = document.getElementById('user-score')
const pcScore_span = document.getElementById('comp-score')

// eventListeners
//  new: eventListeners toye function tarif mikonim ke motmaen shim kar mikone
eventListeners();
function eventListeners() {
     rock_div.addEventListener("click", () => {
          // console.log('rock');
          game("r");
     });
     paper_div.addEventListener("click", () => {
          // console.log('paper');
          game("p");
     });
     scissors_div.addEventListener("click", () => {
          // console.log('scissors');
          game("s");
     });
}

// functions
// get pc choice
function getPcChoice() {
     const choices = ["r", "p", "s"];
     const randomNum = Math.floor(Math.random() * 3);
     return choices[randomNum];
}

// compare user and ps choice
function game(userChoice) {
     // console.log(`user : ${userChoice}`);
     // console.log(`computer : ${getPcChoice()}`);
     const pcChoice = getPcChoice();

     switch (userChoice + pcChoice) {
          case "rs":
          case "pr":
          case "sp":
               win();
               break;
          case "rp":
          case "sr":
          case "ps":
               lose();
               break;
          case "rr":
          case "pp":
          case "ss":
               tie();
               break;
          default:
               break;
     }
}

function win() {
    //  console.log("You Won!");
    userScore ++
    userScore_span.innerHTML = userScore
    pcScore_span.innerHTML = pcScore
}

function lose() {
    //  console.log("You Lost!");
    pcScore ++
    userScore_span.innerHTML = userScore
    pcScore_span.innerHTML = pcScore
}

function tie() {
    //  console.log("You Tied!");

}
