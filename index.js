const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    //Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide installation and testing instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Please provide necessary usage information",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for the project",
      name: "license",
      choices: ["Apache", "Boost", "BSD", "GPL", "GNU", "MIT"],
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message:
        "Please describe the guidelines for contribution for this project",
      name: "contribution",
    },
  ])
  .then((answers) => {
    const {
      title,
      description,
      installation,
      usage,
      license,
      github,
      email,
      contribution,
    } = answers;

    const generateReadMe = `
# ${title}[version](https://img.shields.io/badge/version-1.0.0-blue)

## Description

${description}

## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${license}
  ## Contributing 

  ${contribution}

  ## Questions

  If you'd like to check out my other repositories, please visit:

  [Github Profile](https://github.com/${github})

  If you have any additional questions or want to reach out, please [email](mailto:${email}) me!
 
  `;

    fs.writeFile("ReadMe.md", generateReadMe, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
