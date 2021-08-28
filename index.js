const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input.
// Created a string for the user to input.
const questions = [
  {
    //   title
    type: "input",
    message: "What is the title of your project?",
    name: "tittle",
  },
  //   Whats the discription?
  {
    type: "input",
    message: "Please provide a breif discription of your awesome project.",
    name: "discription",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: ["Apache 2.0 Licene", "MIT", "ILP"],
  },
  {
    //   github
    type: "input",
    name: "GitHub",
    message: "Please enter your GitHub Username.",
  },
  {
    //   email
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
];

inquirer.prompt(questions).then((data) => {
  console.log(data);
});

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => {
    if (error) {
      console.error(err);
    } else {
      console.log("You have made a README.md file successfully!");
    }
  });
}

// Duplicate outline so I commented it out.
// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

init();
