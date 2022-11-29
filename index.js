// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Give me a title',
    name: 'title',
},
{
    type: 'input',
    message: 'Which license are you using? (MIT, ISC, SOMETHING ELSE)',
    name: license,
}];

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
