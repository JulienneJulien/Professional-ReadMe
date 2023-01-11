const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");


const questions = [
// REPO TITLE
{
    type: 'input',
    name:  'title',
    message: 'What is the title of your application repository? (required)',
    validate: titleEntered => {
    if (titleEntered) {
        return true;
    } else {
        console.log('Please enter application repository title to continue!');
        return false;
    }
    }
},    
// REPO DESCRIPTION
{
    type: 'input',
    name:  'description',
    message: 'Provide a description of your application repository (required)',
    validate: descriptionEntered => {
    if (descriptionEntered) {
        return true;
    } else {
        console.log('Please provide application repository description to continue!');
        return false;
    }
    }
},  
// REPO INSTALLATION INFO
{
    type: 'input',
    name:  'installation',
    message: 'What are the installation instructions for your application repository? (required)',
    validate: installationInfo => {
    if (installationInfo) {
        return true;
    } else {
        console.log('Please provide application installation instructions to continue!');
        return false;
    }
    }
},      
// REPO USAGE INFO
{
    type: 'input',
    name:  'usage',
    message: 'How do you use this application repository? (required)',
    validate: usageInfo => {
    if (usageInfo) {
        return true;
    } else {
        console.log('Please provide application repository usage info to continue!');
        return false;
    }
    }
},  
// REPO CONTRIBUTION GUIDELINES
{
    type: 'input',
    name:  'contribution',
    message: 'Who can contribute to your application repository? (required)',
    validate: contributionInfo => {
    if (contributionInfo) {
        return true;
    } else {
        console.log('Please enter application repository contribution guidelines to continue!');
        return false;
    }
    }
},
// REPO TEST INFO
{
    type: 'input',
    name:  'testing',
    message: 'How will your application repository be tested? (required)',
    validate: testInfo => {
    if (testInfo) {
        return true;
    } else {
        console.log('Please provide application repository testing info to continue!');
        return false;
    }
    }
},    
// LICENSE OPTIONS
{
    type: 'checkbox',
    name:  'license',
    message: 'Please select a license option for your application repository (required)',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'None'],
    validate: licenseOptions => {
    if (licenseOptions) {
        return true;
    } else {
        console.log('Please select a license for your application repository to continue!');
        return false;
    }
    }
},    
// GITHUB NAME
{
    type: 'input',
    name:  'github',
    message: 'What is your GitHub name for this application repository? (required)',
    validate: githubEntered => {
    if (githubEntered) {
        return true;
    } else {
        console.log('Please enter application repository GitHub name to continue!');
        return false;
    }
    }
},     
// EMAIL
{
    type: 'input',
    name:  'email',
    message: 'What is your email address for application repository? (required)', 
    validate: emailEntered => {
        if (emailEntered) {
            return true;
        } else {
            console.log('Please enter your email address to continue!');
            return false;
        }
    }
},
];
// TO CREATE README FILE
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log('Successfully created README with user input!')
    });
};
// INITIALIZE APPLICATION
function init () {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeFile('README.md', generateMarkdown(userInput));
    });
};
// FUNCTION CALL TO INITIALIZE APPLICATION
init();
