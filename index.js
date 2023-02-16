// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = []
    
    inquirer
.prompt([
    {
    type: 'input',
    name: 'description',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'contents',
    message: 'Please layout the page with Table of Contents',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'How do you Install this?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please list usage information',
    },
    {
    type: "list",
    message: "What languages do you know?",
    choices: ["MIT", "Other", "GPLv2", "Apache"],
    name: "license"
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Was there anyone else involved in the project?',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Please write tests for you application',
    },
    {
    type: 'input',
    name: 'questions',
    message: 'Further questions that might be asked',
    },

])
.then((answers) => {
    const ReadMeContent = generateMarkdown(answers);
    // writeToFile("index.md", ReadMeContent);
    fs.writeFile('index.md', ReadMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
});

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions)
        .then( (data)=> {
            console.log(data)
            // writeToFile("index.md", generateMarkdown(data));
        })

}

// TODO: Create a function to initialize app


// Function call to initialize app
// init();
