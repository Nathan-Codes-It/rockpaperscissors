
let userChoice = "rock";
function computerPlay(){
   let   computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
       
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice.toLowerCase();
}
function gamePlay(userChoice, computerChoice){
    console.log(userChoice.toLowerCase());
    console.log(computerChoice);
    return "rock";
    


}
console.log(singleRound(userChoice, computerPlay()));


 function singleRound(userChoice, computerChoice){
     let choices = [userChoice, computerChoice];
     if(choices.includes("rock")&& choices.includes("scissors")){
         if(computerChoice == "scissors"){
             return `win: player: ${userChoice} computer: ${computerChoice}`;
         }
     }else if(choices.includes("rock")&& choices.includes("paper")) {
         if(computerChoice == "paper"){
             return `loss: player: ${userChoice} computer: ${computerChoice}`;
         }else if(choices.includes("paper")&& choices.includes("scissors")){
             if(computerChoice == "scissors"){
                 return `loss: player:${userChoice} computer: ${computerChoice}`;
             }else {
                 return `tie`;
             }
         }
        
     }
    
 }


 
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