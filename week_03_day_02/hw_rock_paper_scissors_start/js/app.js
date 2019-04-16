document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');



const choicesComputer = ['rock', 'paper', 'scissors'];
const random = choicesComputer[Math.floor(Math.random() * choicesComputer.length)];
const rock = choicesComputer[0];
const paper = choicesComputer[1];
const scissors = choicesComputer[2];



const buttonRock = document.querySelector('#buttonRock');
buttonRock.addEventListener('click', (event) => {
  const clickedRock = document.querySelector('#players-choice');
  clickedRock.textContent = `Player plays: ${rock}`
  const computerChoice = document.querySelector('#computers-choice');
  computerChoice.textContent = `Computer plays: ${random}`;
  const result = document.querySelector('#result');
if(rock == random){
result.textContent = 'It\'s a draw...'
}else if (rock == rock && random == scissors) {
  result.textContent = 'You win!!!'
}else {
  result.textContent = 'You lose!'
}
});

const buttonPaper = document.querySelector('#buttonPaper');
buttonPaper.addEventListener('click', (event) => {
  const clickedPaper = document.querySelector('#players-choice');
  clickedPaper.textContent = `Player plays: ${paper}`
  const computerChoice = document.querySelector('#computers-choice');
  computerChoice.textContent = `Computer plays: ${random}`;
  const result = document.querySelector('#result');
if(paper == random){
result.textContent = 'It\'s a draw...'
}else if (paper == paper && random == rock) {
  result.textContent = 'You win!!!'
}else {
  result.textContent = 'You lose!'
}
});

const buttonScissors = document.querySelector('#buttonScissors');
buttonScissors.addEventListener('click', (event) => {
  const clickedScissors = document.querySelector('#players-choice');
  clickedScissors.textContent = `Player plays: ${scissors}`
  const computerChoice = document.querySelector('#computers-choice');
  computerChoice.textContent = `Computer plays: ${random}`;
  const result = document.querySelector('#result');
if(scissors == random){
result.textContent = 'It\'s a draw...'
}else if (scissors == scissors && random == paper) {
  result.textContent = 'You win!!!'
}else {
  result.textContent = 'You lose!'
}
});
});
