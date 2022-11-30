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
    type: 'checkbox',
    message: 'What sections do you want to include in your table of contents?',
    choices: ['Installation', 'License', 'Contributions', 'Tests', 'Questions'],
    name: 'tableOfContents',
},
{
    type: 'input',
    message: 'What should the user have installed to utilize your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How does the user utilize your application?',
    name: 'usage',
},
{
    type: 'list',
    message: 'Which license are you using?',
    choices: ['MIT', 'Apache License 2.0'], 
    name: 'license',
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
    message: 'Please provide your GitHub username.',
    name: 'username',
},
{
    type: 'input',
    message: 'Provide your email.',
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
