// Returns license badge if license is found otherwise returns ""
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

// Returns license link if license is found otherwise returns ""
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

// Returns the license link with the license badge if license is found otherwise returns ""
function renderLicenseSection(license) {
  if(license == ""){
    return "";
  }
  return "[![License](" + renderLicenseBadge(license)+ ")](" + renderLicenseLink(license) +")";
}

// Contains template for README that is filled with data
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