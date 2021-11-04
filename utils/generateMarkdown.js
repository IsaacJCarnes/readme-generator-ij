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
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license == "MIT"){
    return "https://opensource.org/licenses/MIT";
  } else if (license == "GNU"){
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
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
`+renderLicenseSection(data.license)+`\n
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
Using the ${data.license} license
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
You can find me on [Github](https://github.com/${data.github})\n
You can email me at ${data.email}
`;
}

module.exports = generateMarkdown;