const chalk = require('chalk');
var readlineSync = require('readline-sync');

const queBank = [
  {
    question : `How many houses are there in Hogwarts school of witchcraft and wizardry? 
    a: 5
    b: 3
    c: 4
    
    `, 
    answer : "c"
  },
  {
    question : `Which house in Hogwarts has the best views of the castle?" 
    a: Ravenclaw
    b: Slytherine
    c: Hufflepuff
    
    `, 
    answer : "a"
  },
  {
    question : `How many Horcruxes are there in Harry Potter series? 
    a: 6
    b: 8
    c: 7
    
    `, 
    answer : "b"
  },
  {
    question : `Who is the half blood prince? 
    a: Harry Potter
    b: Snape
    c: Draco Malfoy
    
    `, 
    answer : "b"
  },
  {
    question : `How many weasly kids are there in the Weasly family 
    a: 7
    b: 6
    c: 4
    
    `, 
    answer : "a"
  }
];

let highScore = [
  {
    name : "Dhruv",
    score : "5"
  },
  {
    name : "Milind",
    score : "4"
  }
];

let score = 0;

let userName = readlineSync.question(chalk.blue('May I have your name please? '));
console.log("Welcome to this quiz " + userName);
console.log(chalk.blue("This is quick quiz to test how well you know the Harry Potter series."));

function play(question , answer){
    let userAns = readlineSync.question(question);
    if(userAns.toUpperCase() === answer.toUpperCase()){
      score = score + 1;
      console.log(chalk.green("Right answer!"));
    }
    else{
      score = score - 1;
      console.log(chalk.red("Wrong answer!"));
    }
    console.log(chalk.green("Score : ") + score);
    console.log(chalk.yellow("----------------"));
}

for(let i = 0;i<queBank.length;i++){
  play(queBank[i].question , queBank[i].answer);
}

console.log("Your final score is " + score);
console.log(chalk.yellow("----------------"));


console.log("Here are the highscores.");
for(let i=0;i<highScore.length;i++){
  console.log(`{Place ${i+1}}`);
  console.log("name " + highScore[i].name);
  console.log("score " + highScore[i].score);
  console.log(chalk.yellow("----------------"));
}