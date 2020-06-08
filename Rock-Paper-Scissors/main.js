const rock = document.getElementById("rock-group");
const paper = document.getElementById("paper-group");
const scissors = document.getElementById("scissors-group");

const rockBot = document.getElementById("rock-group-bot");
const paperBot = document.getElementById("paper-group-bot");
const scissorsBot = document.getElementById("scissors-group-bot");
const versus = document.getElementById("versus");

const rockName = document.getElementById("rock-name");
const paperName = document.getElementById("paper-name");
const scissorsName = document.getElementById("scissors-name");

const rockNameBot = document.getElementById("rock-name-bot");
const paperNameBot = document.getElementById("paper-name-bot");
const scissorsNameBot = document.getElementById("scissors-name-bot");
//score ids
let bestStreak = document.getElementById("best-streak");
let currentStreak = document.getElementById("current-streak");
let totalWins = document.getElementById("total-wins");
let totalLosses = document.getElementById("losses");

let clickCounter = 0;
let isClicked = false;

let playerChoice;
let botChoice;
let startButton = document.getElementById("start");

//score variables
let bStreak = 0;
let cStreak = 0;
let wins = 0;
let losses = 0;



let numOfItems = 3;
let revealedItemByBot;

const cursorOn = function(event){
    event.target.style.opacity = "0.5";
}

const cursorOut = function(event){
    event.target.style.opacity = "";
}

rock.addEventListener("mouseover", cursorOn);
rock.addEventListener("mouseout", cursorOut);

paper.addEventListener("mouseover", cursorOn);
paper.addEventListener("mouseout", cursorOut);

scissors.addEventListener("mouseover", cursorOn);
scissors.addEventListener("mouseout", cursorOut);

//Bot's turn
const randomItemSelector = () =>{
    const chosenBotItem = Math.floor(Math.random() * numOfItems);
    if(clickCounter < 1){
        if(chosenBotItem === 0){
            botChoice = rockBot;
            rockBot.style.display = "block";
            versus.style.display = "block";
            versus.style.float = "right";
            rockBot.style.float = "right";
            rockBot.style.marginRight = "15px";
            rockNameBot.style.backgroundColor = "#fd4d3f";
            
        }else if(chosenBotItem === 1){
            botChoice = paperBot;
            paperBot.style.display = "block";
            versus.style.display = "block";
            versus.style.float = "right";
            paperBot.style.float = "right";
            paperBot.style.marginRight = "15px";
            paperNameBot.style.backgroundColor = "#fd4d3f";
        }else{
            botChoice = scissorsBot;
            scissorsBot.style.display = "block";
            versus.style.display = "block";
            versus.style.float = "right";
            
            scissorsBot.style.float = "right";
            scissorsBot.style.marginRight = "15px";
            scissorsNameBot.style.backgroundColor = "#fd4d3f";
        }
    }
    
    gameResults(playerChoice, botChoice);
};

//Clicking an item Groupe
rock.onclick = () => {
    isClicked = true;
    playerChoice = rock;
    paper.style.display = "none";
    scissors.style.display = "none";
    rockName.style.backgroundColor = "#6df0c2";
    randomItemSelector();
    clickCounter++;
};

paper.onclick = () => {
    isClicked = true;
    playerChoice = paper;
    paper.style.float = "left";
    rock.style.display = "none";
    scissors.style.display = "none";
    paperName.style.backgroundColor = "#6df0c2";
    randomItemSelector();
    clickCounter++;
};

scissors.onclick = () => {
    isClicked = true;
    playerChoice = scissors;
    scissors.style.float = "left";
    paper.style.display = "none";
    rock.style.display = "none";
    scissorsName.style.backgroundColor = "#6df0c2";
    randomItemSelector();
    clickCounter++;
};

//Game results
const gameResults = (playerChoice, botChoice) => {
    if((playerChoice === rock && botChoice === rockBot) || (playerChoice === paper && botChoice === paperBot) || (playerChoice === scissors && botChoice === scissorsBot)){
        cStreak = 0;
        startButton.style.backgroundColor = "#CBB79A";
        startButton.innerHTML = "It's a tie! Play again?";
        startButton.style.display = "block";
        
    }else if(playerChoice === rock && botChoice === scissorsBot){
        wins++;
        cStreak++;
        if(cStreak >= bStreak){
            bStreak = cStreak;
        }
        startButton.style.backgroundColor = "#6df0c2";
        startButton.innerHTML = "You win! Play again?";
        startButton.style.display = "block";
        
    }else if(playerChoice === rock && botChoice === paperBot){
        losses++;
        cStreak = 0;
        startButton.style.backgroundColor = "#fd4d3f";
        startButton.innerHTML = "You lose! Play again?";
        startButton.style.display = "block";
        
    }else if(botChoice === rockBot && playerChoice === scissors){
        losses++;
        cStreak = 0;
        startButton.style.backgroundColor = "#fd4d3f";
        startButton.innerHTML = "You lose! Play again?";
        startButton.style.display = "block";
    }else if(botChoice === rockBot && playerChoice === paper){
        wins++;
        cStreak++;
        if(cStreak >= bStreak){
            bStreak = cStreak;
        }
        startButton.style.backgroundColor = "#6df0c2";
        startButton.innerHTML = "You win! Play again?";
        startButton.style.display = "block";
        
    }else if(playerChoice === scissors && botChoice === paperBot){
        wins++;
        cStreak++;
        if(cStreak >= bStreak){
            bStreak = cStreak;
        }
        startButton.style.backgroundColor = "#6df0c2";
        startButton.innerHTML = "You win! Play again?";
        startButton.style.display = "block";
        
    }else if(playerChoice === paper && botChoice === scissorsBot){
        losses++;
        cStreak = 0;
        startButton.style.backgroundColor = "#fd4d3f";
        startButton.innerHTML = "You lose! Play again?";
        startButton.style.display = "block";
        
    }
    rock.style.pointerEvents = "none";
    paper.style.pointerEvents = "none";
    scissors.style.pointerEvents = "none";
    currentStreak.innerHTML = cStreak;
    bestStreak.innerHTML = bStreak;
    totalLosses.innerHTML = losses;
    totalWins.innerHTML = wins;
}

const startRound = () => {
    startButton.style.display = "";
    rock.style.display = "";
    paper.style.display = "";
    scissors.style.display = "";
    
    rock.style.pointerEvents = "";
    paper.style.pointerEvents = "";
    scissors.style.pointerEvents = "";
    
    rockName.style.backgroundColor = "";
    paperName.style.backgroundColor = "";
    scissorsName.style.backgroundColor = "";
    
    rockBot.style.display = "";
    paperBot.style.display = "";
    scissorsBot.style.display = "";
    versus.style.display = "";
    clickCounter = 0;
    isClicked = false;
    playerChoice = null;
    botChoice = null;
    
};

startButton.onclick = startRound;

