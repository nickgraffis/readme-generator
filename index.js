var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generate-markdown");
const fs = require('fs');

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What is a good description of your project?",
    },
    {
      type: 'input',
      name: 'installation',
      message: "How do you install this project?",
    },
    {
      type: 'list',
      name: 'liscense',
      message: "What is your project liscensed under?",
      choices: ['Public', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary', 'MIT'],
      filter: function (val) {
        return val.toLowerCase();
      },
    },
    {
      type: 'input',
      name: 'contributing',
      message: "How do you contribute to this project?",
    },
    {
      type: 'input',
      name: 'tests',
      message: "How do you test this project?",
    },
    {
      type: 'input',
      name: 'username',
      message: "What is your github username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "How do you get started?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
  // If there is any error in writing to the file, return
	if (err) {
		console.error(err)
		return
	}

	// Log this message if the file was written to successfully
	console.log('wrote to file successfully')
})
};

// function to initialize program
function init() {
  return inquirer
  .prompt(questions)
  .then(answers => {
    writeToFile('./README.md', generateMarkdown(answers))
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('errorType')
    } else {
      console.log(error)
    }
  });
}

// function call to initialize program
init();
