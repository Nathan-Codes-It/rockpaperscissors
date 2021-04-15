
//let userChoice = prompt("rock, paper, or scissors? (also remember to spell correctly");
function computerPlay(){
    let score = 0;
   let   computerChoice = Math.random();
    if (computerChoice < 0.40) {
        computerChoice = "rock";
       
    } else if(computerChoice <= 0.60) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice.toLowerCase();
}
function gamePlay(){
    let score = 0;

    let playerChoice = prompt("pick between rock, paper, and scissors");
    let computerChoice = computerPlay;
    console.log(singleRound(playerChoice, computerChoice()));
    score += (singleRound(playerChoice, computerChoice()))



     playerChoice = prompt("pick between rock, paper, and scissors");
     computerChoice = computerPlay;
    console.log(singleRound(playerChoice, computerChoice()));
    score += (singleRound(playerChoice, computerChoice()))

     playerChoice = prompt("pick between rock, paper, and scissors");
    computerChoice = computerPlay;
    console.log(singleRound(playerChoice, computerChoice()));
    score += (singleRound(playerChoice, computerChoice()))


     playerChoice = prompt("pick between rock, paper, and scissors");
     computerChoice = computerPlay;
    console.log(singleRound(playerChoice, computerChoice()));
    score += (singleRound(playerChoice, computerChoice()))


     playerChoice = prompt("pick between rock, paper, and scissors");
     computerChoice = computerPlay;
    console.log(singleRound(playerChoice, computerChoice()));
    score += (singleRound(playerChoice, computerChoice()))
}



  function singleRound(userChoice, computerChoice, score){
      if(userChoice == computerChoice){
        
          return `Tie! player: ${userChoice} computer: ${computerChoice} `;
      }
      else if(userChoice == "rock" && computerChoice == "paper") {
        
          return `loss! player: ${userChoice} computer: ${computerChoice}`;
      }
      else if(userChoice == "paper" && computerChoice == "rock") {
        
          return `win! player: ${userChoice} computer: ${computerChoice}`;
      }
      else if(userChoice == "scissors" && computerChoice =="rock"){
       
          return `loss! player: ${userChoice} computer: ${computerChoice}`;
      }
      else if(userChoice == "rock" && computerChoice == "scissors"){
        
          return `win! player: ${userChoice} computer: ${computerChoice}`;
      }
      else if(userChoice == "paper" && computerChoice == "scissors"){
        
          return `loss! player: ${userChoice} computer: ${computerChoice}`;
      }
      else if(userChoice == "scissors" && computerChoice == "paper"){
      
          return `win! player: ${userChoice} computer: ${computerChoice}`;
      }
  }
gamePlay();
//      let choices = [userChoice, computerChoice];
//      if(choices.includes("rock")&& choices.includes("scissors")){
//          if(computerChoice == "scissors"){
//              return `win! player: ${userChoice} computer: ${computerChoice}`;
//          }
//      }else if(choices.includes("rock") && choices.includes("paper")) {
//          if(computerChoice == "paper"){
//              return `loss! player: ${userChoice} computer: ${computerChoice}`;
//          }else if(choices.includes("paper") && choices.includes("scissors")){
//              if(computerChoice == "scissors"){
//                  return `loss!   player:${userChoice} computer: ${computerChoice}`;
//              }else {
//                  return `tie`;
//              }
//          }
        
//      }
    
//  }


 
// let num1 = 5;
// let num2 = 2;

// function multipy(num1,num2){
//     return num1 * num2;

// }
// let answer = multipy(5,2);
// console.log(answer);
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