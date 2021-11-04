// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "APACHE"){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license == "MIT"){
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license == "GNU"){
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "APACHE"){
    return "https://api.github.com/licenses/apache-2.0";
  } else if (license == "MIT"){
    return "https://api.github.com/licenses/mit";
  } else if (license == "GNU"){
    return "https://api.github.com/licenses/gpl-3.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "[![License](" + renderLicenseBadge(license)+ ")](" + renderLicenseLink(license) +")";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    `+renderLicenseSection(data.license)+`
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    You can find me on github at ${data.github}
    You can email me at ${data.email}

  `;
}

module.exports = generateMarkdown;