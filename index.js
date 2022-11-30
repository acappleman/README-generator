// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a short description for your project.',
    name: 'description',
},
{
    type: 'input',
    message: 'What sections do you want to include in your table of contents? Options include: installation, license, contributions, tests and questions.',
    name: 'table-of-contents',
},
{
    type: 'input',
    message: 'What steps are required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Which license are you using? (MIT, ISC, SOMETHING ELSE)',
    name: license,
}, 
{
    type: 'input',
    message: 'Describe how other programmers should contribute to this project.',
    name: 'contributions',
},
{
    type: 'input',
    message: 'Write tests for your application here.',
    name: 'tests',
},
{
    type: 'input',
    message: 'Please provide your GitHub username for questions.',
    name: 'username',
},
{
    type: 'input',
    message: 'Provide your email for questions.',
    name: 'email',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README completed!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const data = generateMarkdown(response);
            writeToFile('README_example.md', data);
        })
}

// Function call to initialize app
init();
