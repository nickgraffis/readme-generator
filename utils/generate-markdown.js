// function to generate markdown for README
function generateMarkdown(answers) {
  return `
    # ${answers.title}

    ## ${answers.description}

    ## Table of Contents:
    + [Installation](#installation)
    + [Usage](#usage)
    + [License](#license)
    + [Contributing](#contributing)
    + [Tests](#tests)
    + [Questions](#questions)

    ## Installation
      ${answers.installation}
    ## Usage
      ${answers.usage}
    ## Liscense
      ${answers.liscense}
    ## Contributing
      ${answers.contributing}
    ## Tests
      ${answers.title}
    ## Questions
    Please reach out to @${answers.username} or email ${answers.email}


    `;
}

module.exports = generateMarkdown;
