//Created a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, will return an empty string
  if(license === 'noLicense') {
      return '';
  } else {
  return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

//Created a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'Apache') {  
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license === 'GPL') {  
    return `https://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'MIT') {  
    return `https://mit-license.org/`
  }
  if (license === 'BSD') {  
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
  if (license === 'Boost') {  
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
}
//Created a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'noLicense') {
    return ``;
  } else {
    return `## License
    This application is licensed under the ${license} license.`
  }
}

//Created a function to generate markdown for README
function generateMarkdown(userInput) {
  return `#${userInput.title}

${renderLicenseBadge(userInput.license)}

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
<br>*Contributor Covenant encourages contributions of all kinds from people around the world. This makes the practice of open source as much social as it is technical.*

## Tests
${userInput.testing}

${renderLicenseSection(userInput.license)}

## Questions
*Please contact me below!*
- Github: [${userInput.github}](https://github.com/${userInput.github})
- Email: ${userInput.email} `;
}

module.exports = generateMarkdown;
