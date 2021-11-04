// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  ["title", "input", "What's the title of your project?"],
  ["description", "input", "How would you describe the project?"],
  ["installation", "input", "How do you install the project?"],
  ["usage", "input", "How do you use the project?"],
  ["contributing", "input", "How can people contribute to the project?"],
  ["tests", "input", "How can people add tests to the project?"],
  ["license", "list", "How is the project licensed?"],
  ["github", "input", "What is your github username?"],
  ["email", "input", "What is your email address?"],
];

const licenseChoices = ["MIT", "GNU", "APACHE"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Generate markdown
    fs.writeFile('./utils/README.md', generateMarkdown(data), err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
}

// TODO: Create a function to initialize app
function init() {
    //Inquirer prompt
    //.then goes to write to file
    inquirer
    .prompt([
      {
        type: questions[0][1],
        name: questions[0][0],
        message: questions[0][2],
      },
      {
        type: questions[1][1],
        name: questions[1][0],
        message: questions[1][2],
      },
      {
        type: questions[2][1],
        name: questions[2][0],
        message: questions[2][2],
      },
      {
        type: questions[3][1],
        name: questions[3][0],
        message: questions[3][2],
      },
      {
        type: questions[4][1],
        name: questions[4][0],
        message: questions[4][2],
      },
      {
        type: questions[5][1],
        name: questions[5][0],
        message: questions[5][2],
      },
      {
        type: questions[6][1],
        name: questions[6][0],
        message: questions[6][2],
        choices: licenseChoices,
      },
      {
        type: questions[7][1],
        name: questions[7][0],
        message: questions[7][2],
      },
      {
        type: questions[8][1],
        name: questions[8][0],
        message: questions[8][2],
      }
    ])
    .then((data) => {
        writeToFile("README_gen.md", data);
    });
}

// Function call to initialize app
init();
