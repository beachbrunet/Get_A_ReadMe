// TODO: Include packages needed for this application
// Global Variables.
const fs = require("fs");
const inquirer = require("inquirer");
const gereate# = require('./#')

// TODO: Create an array of questions for user input.
// Created a string for the user to input.
const questions = [
  {
    //   title
    type: "input",
    name: "tittle",
    message: "What is the title of your project?",
  },
//   Whats the discription?
  {
    type: "input",
    name: "disciption",
    message: "Please provide a breif discription of your awesome project.",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: ["MiT", "license", "other license", "#"]
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
  {
    type: "#",
    name: "#",
    message: "#",
  },
];

inquirer.prompt(questions).then((data) => {
console.log(data);

});


// Requirements
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log("You have made a README.md file successfully!")
  }

});
}

// duplicate outline so I commented it out.
// // TODO: Create a function to initialize app
// function init() {}




// Function call to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response)=> {
    writeToFile("README.md", generate#(response));
  });
}


init();
