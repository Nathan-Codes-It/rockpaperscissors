let userChoice = prompt("Do you choose rock, paper or scissors?");

function computerPlay(){
   let   computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
       
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice.toUpperCase();
}
function gamePlay(playerChoice, computerChoice){
    console.log(playerChoice.toUpperCase());
    console.log(computerChoice);
    


}
gamePlay(userChoice, computerPlay())

if(userChoice == computerPlay){
    alert("tie");
}
let compare = function( playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "Tie"
    }
}

// var compare = function(choice1, choice2) {
//     if(choice1 === choice2) {
//     return "The result is a tie!";
// }
// if(choice1 === "rock") {
//     if(choice2 === "scissors") {
//         return "rock wins";
//     } else {
//         return "paper wins";
//     }
// }
// if(choice1 === "paper") {
//     if(choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if(choice2 === "scissors") {
//             return "scissors wins";
//     }
// }
// }
// if(choice1 === "scissors") {
//     if(choice2 === "rock") {
//         return "rock wins";
//     } else {
//         if(choice2 === "paper") {
//             return "scissors wins";
//         }
//     }
// }
// }
// ;
// console.log("User Choice: " + userChoice);
// console.log("Computer Choice: " + computerChoice);
// compare(userChoice, computerChoice);