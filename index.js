const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input.
// Created a string for the user to input.
// Via feedback I am missing that seemed helpful was: the table of contents formatting was off, and there were no sections for installation/usage/tests.
const questions = [
  {
    //   title
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  //   Whats the discription?
  {
    type: "input",
    message: "Please provide a breif discription of your awesome project.",
    name: "description",
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
  // dependencies w/ default if nothing selected
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies?",
    default: "npm i",
  },
  // test w/ default if nothing selected
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "contributer",
    message: "How does a user contribute to this project?",
  },
];

// This was to test the node.js to make sure it was running correctly
// inquirer.prompt(questions).then((data) => {
//   console.log(data);
// });

// TODO: Create a function to write GENERATED-README file
function writeToFile(fileName, data) {
  fs.writeFile("GENERATED-README.md", data, (err) => {
    err
      ? console.log(err)
      : console.log("You have made a READMEGEN.md file successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("GENERATED-README.md", generateMarkdown(data));
  });
}

init();
