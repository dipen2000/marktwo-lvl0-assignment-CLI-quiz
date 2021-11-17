const chalk = require('chalk');
console.log(chalk.blue('Hello!!'));
console.log("Welcome to the quiz where you(muggle) are going to be tested on your knowledge about wizarding world of Harry potter");
var readlineSync = require('readline-sync');
let userName = readlineSync.question(chalk.blue("Can i know your name please "));
console.log("Welcome " +chalk.yellow(userName));

const ansNumHouses = 4;
const ansBestViews = "Ravenclaw";
const ansNumHorcruxes = 8;
const ansHalfBloodPrince = "Snape";
const ansWeaslyKids = 7;
const ansGoldenSnitchPoints = 150;
let count = 0;
if (readlineSync.keyInYN(chalk.blue('Are you sure you wanna start?'))) {
  // 'Y' key was pressed.
  console.log('OK good to go');
  console.log("I am going to ask you six questions let's see How many of the them you get right..");

  let numHouses = readlineSync.question(chalk.blue("How many houses are there in Hogwarts school of witchcraft and wizardry?"));
  if(+numHouses === ansNumHouses){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(numHouses === ""){
    console.log(chalk.magenta("You passed this one."));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let bestViews = readlineSync.question(chalk.blue("Which house in Hogwarts has the best views of the castle?"));
  if(bestViews === ansBestViews){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(bestViews === ""){
    console.log(chalk.magenta("You passed this one"));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let numHorcruxes = readlineSync.question(chalk.blue("How many Horcruxes are there in Harry Potter series?"));
  if(+numHorcruxes === ansNumHorcruxes){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(numHorcruxes === ""){
    console.log(chalk.magenta("You passed this one"));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let halfBloodPrince = readlineSync.question(chalk.blue("Who is the half blood prince?"));
  if(halfBloodPrince === ansHalfBloodPrince){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(halfBloodPrince === ""){
    console.log(chalk.magenta("You passed this one"));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let weaslyKids = readlineSync.question(chalk.blue("How many weasly kids are there in the Weasly family"));
  if(+weaslyKids === ansWeaslyKids){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(weaslyKids === ""){
    console.log(chalk.magenta("You passed this one."));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

let goldenSnitchPoints = readlineSync.question(chalk.blue("How many points does the Golden Snitch reward in a Quiditch match?"));
  if(+goldenSnitchPoints === ansGoldenSnitchPoints){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(goldenSnitchPoints === ""){
    console.log(chalk.magenta("You passed this one."));
  }
  else{
    console.log(chalk.green("Noted."))
  }
  console.log(chalk.yellow("Result coming in 2 sec precisely..."));
  let timer = setTimeout(()=>{
    console.log("Right answer " + ansNumHouses);
    console.log("Your answer " + numHouses);
    console.log("Right answer " + ansBestViews);
    console.log("Your answer " + bestViews);
    console.log("Right answer " + ansNumHorcruxes);
    console.log("Your answer " + numHorcruxes);
    console.log("Right answer " + ansHalfBloodPrince);
    console.log("Your answer " + halfBloodPrince);
    console.log("Right answer " + ansWeaslyKids);
    console.log("Your answer " + weaslyKids);
    console.log("Right answer " + ansGoldenSnitchPoints);
    console.log("Your answer " + goldenSnitchPoints);
    if(count===6){
      console.log(chalk.green("Congratulations you got 6 out of 6"));
    }
    else{
      console.log(chalk.yellow("You got " + count + " out of 6"));
    }
  },2000);
} 

else {
  // Another key was pressed.
  console.log(chalk.magenta('ok no problem some other time.'));
}

