#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "FirstNumber" },
  { message: "Enter your second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of operators to perform action",
    type: "list",
    name: "operators",
    choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);


  // CONDITIONAL STATEMENT
  if (answer.operators === "ADDITION"){
    console.log(answer.FirstNumber + answer.SecondNumber) ;
  } else if (answer.operators === "SUBSTRACTION"){
    console.log(answer.FirstNumber - answer.SecondNumber) ;
  } else if (answer.operators === "MULTIPLICATION"){
    console.log(answer.FirstNumber * answer.SecondNumber) ;
  } else if (answer.operators === "DIVISION"){
    console.log(answer.FirstNumber % answer.SecondNumber) ;
  } 
  else {"Please select correct operator"}


