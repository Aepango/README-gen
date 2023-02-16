// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../../utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = []
    
    inquirer
.prompt([
    {
    type: 'input',
    name: 'Description',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'Table Of Contents',
    message: 'Please layout the page with Table of Contents',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'How do you Install this?',
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'Please list usage information',
    },
    {
    type: "list",
    message: "What languages do you know?",
    choices: ["MIT", "Other", "GPLv2", "Apache"],
    name: "License"
    },
    {
    type: 'input',
    name: 'Contributing',
    message: 'Was there anyone else involved in the project?',
    },
    {
    type: 'input',
    name: 'Tests',
    message: 'Please write tests for you application',
    },
    {
    type: 'input',
    name: 'Questions',
    message: 'Further questions that might be asked',
    },

])
.then((answers) => {
    const ReadMeContent = generateMarkdown(answers);
});

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("index.md", generateMarkdown(data));
            console.log(data)
        })

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
