// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
}

// TODO: Create a function to initialize app
function init() {
    //Inquirer prompt
    //.then goes to write to file
}

// Function call to initialize app
init();
