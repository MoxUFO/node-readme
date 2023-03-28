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
    {
      type: "input",
      message: "What is Github name?",
      name: "githubname",
    },
    {
      type: "input",
      message: "What is your Email address?",
      name: "emailaddress",
    },
    {
      type: "input",
      message: "What is your Project name?",
      name: "projectname",
    },
    {
      type: "input",
      message: "What is the description of your porject?",
      name: "description",
    },
    {
      type: "list",
      message: "What license does your project include?",
      name: "license",
      choices: ["MIT",'Apache2.0','GPL'],
    },
    {
      type: "input",
      message: "What command should i run to install dependencies?",
      name: "dependencies",
    },
    {
      type: "input",
      message: "What command should i run to run test?",
      name: "test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message: "What does the user need o know about contributing to the repo?",
      name: "contribute",
    },
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
