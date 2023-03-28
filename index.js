// these are the packages and modules needed to run this app.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdownFile = require("./generateMarkdown");

//This function makes the file and uses the returned template from the generateMarkdownFile function as the information stored.
function writeToFile(data) {
  fs.writeFile(`README.md`, generateMarkdownFile(data), (error) => {
    error ? console.error(error) : console.log("worked!");
  });
};

// questions format from inquirer.
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
      message: "What does the user need to know about contributing to the repo?",
      name: "contribute",
    },
  ];

// // function to take in user input and pass the information to writeToFile function
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    writeToFile(response);
  });
}

// Function call to initialize app
init();
