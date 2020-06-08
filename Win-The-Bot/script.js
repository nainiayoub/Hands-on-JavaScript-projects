let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById("start");
let currentlyPlaying = true;
let currentStreakBox = document.getElementById("current-streak");
let bestStreakBox = document.getElementById("best-streak");
let numberOfStreaks = 0;
let bestStreak = 0;

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver("win");
    numberOfStreaks++;
    currentStreakBox.innerHTML = numberOfStreaks;
    if(numberOfStreaks > bestStreak){
        bestStreak = numberOfStreaks;
        bestStreakBox.innerHTML = bestStreak;
    }
  }else if (isBot(door)){
    gameOver();
    numberOfStreaks = 0;
    currentStreakBox.innerHTML = numberOfStreaks;
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath
  }else{
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying ){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying ){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying ){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if(!currentlyPlaying){  
    startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath; 
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
    startButton.style.display = "none";
  startButton.style.padding = "";
    startButton.style.backgroundColor = "";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
    startButton.style.padding = "10px";
    startButton.style.backgroundColor = "#EAB441";
 
  }else{
    startButton.innerHTML = "Game over! Play again?";
    startButton.style.padding = "10px";
  }
  startButton.style.display = "block";
  currentlyPlaying = false;
};



startRound();

