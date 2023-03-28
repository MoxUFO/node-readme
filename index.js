// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdownFile = require("./generateMarkdown");

function writeToFile(data) {
  fs.writeFile(`README.md`, generateMarkdownFile(data), (error) => {
    error ? console.error(error) : console.log("worked!");
  });
};

// TODO: Create an array of questions for user input
const questions = [
  
  ];

// // TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    writeToFile(response);
  });
}

// Function call to initialize app
init();
