// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: '[https://img.shields.io/badge/license-%20Apache%20License%202.0-blue](https://shields.io/)',
  }

  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
# ${userInput.title}

## Table of Content
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Description
${userInput.description}

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## Contributing
${userInput.contribution}
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests
${userInput.testing}

## License
${(userInput.license)}

## Questions
GitHub: ${userInput.github}
Email: ${userInput.email}


`;
}

module.exports = generateMarkdown;
