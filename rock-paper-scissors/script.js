let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector(".reset").onclick = () =>{
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
}

const genCompChoice = () => {
   const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}
function showWinner(userWin,userChoice,compChoice){
        if(userWin){
           userScore++;
           userScorePara.innerText = userScore;
            msg.innerText = `You Win 😃 your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "rgb(232, 115, 115)"
            
        }else{
           compScore++;
           compScorePara.innerText = compScore;
          msg.innerText = `You Loose ☹️ ${compChoice} beats your ${userChoice}`;
          msg.style.backgroundColor = "rgb(25, 161, 25)"
        
        }
}
function  drowGame(){
  msg.innerText = "It's Draw 😲 Play Again ";
  msg.style.backgroundColor = "yellow"
 
}
const playGame = (userChoice) => {
   const compChoice = genCompChoice();
  console.log("user choice is ",userChoice)
   console.log("computer choice is ",compChoice)

   if(userChoice === compChoice){
    drowGame();
   }else{
     let userWin = true;
     if(userChoice === "rock"){
         userWin = compChoice === "paper"?false:true
     }else if(userChoice === "paper"){
        userWin = compChoice === "scissors"?false:true
     }else{
        userWin = compChoice ==="rock"?false:true
     }
     showWinner(userWin , userChoice,compChoice);
   }
}

choices.forEach( (choice) => {
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});