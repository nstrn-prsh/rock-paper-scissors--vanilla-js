// variables
let userScore = 0
let pcScore = 0

const rock_div = document.querySelector('#rock')
const paper_div = document.querySelector('#paper')
const scissors_div = document.querySelector('#scissors')

// eventListeners
//  new: eventListeners toye function tarif mikonim ke motmaen shim kar mikone
eventListeners()
function eventListeners(){
    rock_div.addEventListener('click',()=>{
        // console.log('rock');
    })
    paper_div.addEventListener('click',()=>{
        // console.log('paper');
    })
    scissors_div.addEventListener('click',()=>{
        // console.log('scissors');
    })
}

// functions