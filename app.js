// variables
let userScore = 0;
let pcScore = 0;

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("comp-score");

const result_div = document.querySelector(".result p");

// eventListeners
//  new: eventListeners toye function tarif mikonim ke motmaen shim kar mikone
eventListeners();
function eventListeners() {
    // userChoice is here
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
               win(userChoice, pcChoice);
               break;
          case "rp":
          case "sr":
          case "ps":
               lose(userChoice, pcChoice);
               break;
          case "rr":
          case "pp":
          case "ss":
               tie(userChoice, pcChoice);
               break;
          default:
               break;
     }
}

// baraye inke be sorate kalame neshon bedim ki chio entekhab kard
function convertToWord(letter) {
     if (letter == "r") return "rock";
     else if (letter == "p") return "paper";
     else return "scissors";
}

function classStatus(userChoice, color){
   //  inja az convertToWord estefade mikonim chon id ha be sorat kalame kamel neveshte shodan 
    // vali ma baraye rahati faghat az harfe avaleshon estefade kardim
    document.getElementById(convertToWord(userChoice)).classList.add(color)
    //remove after 1000 ms
    setTimeout(() => {
        document.getElementById(convertToWord(userChoice)).classList.remove(color)
    }, 1000);
}

function win(userChoice, pcChoice) {
     //  console.log("You Won!");
     userScore++;
     userScore_span.innerHTML = userScore;
     pcScore_span.innerHTML = pcScore;
     result_div.innerHTML = `you won! you chose ${convertToWord(userChoice)} and robot chose ${convertToWord(pcChoice)}.`
    classStatus(userChoice, 'green')
}

function lose(userChoice, pcChoice) {
     //  console.log("You Lost!");
     pcScore++;
     userScore_span.innerHTML = userScore;
     pcScore_span.innerHTML = pcScore;
     result_div.innerHTML = `you lost! you chose ${convertToWord(userChoice)} and robot chose ${convertToWord(pcChoice)}.`
     classStatus(userChoice, 'red')
    }

function tie(userChoice, pcChoice) {
     //  console.log("You Tied!");
     result_div.innerHTML = `you tied! you chose ${convertToWord(userChoice)} and robot chose ${convertToWord(pcChoice)}.`
     classStatus(userChoice, 'gray')
}
