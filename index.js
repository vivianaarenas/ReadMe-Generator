const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    //Description, Installation, Usage, License, Contributing, Tests, and Questions
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project.",
      //variable name i want it stored to
      name: "description",
    },
    {
      type: "input",
      message: "Please provide installation instructions",
      //variable name i want it stored to
      name: "installation",
    },
    {
      type: "input",
      message: "Please usage information and examples of project in use",
      name: "usage",
    },
    // {
    //   type: "list",
    //   message: "Choose a license for the project",
    //   //variable name i want it stored to
    //   name: "license",
    //   choices: ["Apache", "GNU", "MIT"],
    // },
    {
      type: "input",
      message: "What is your Github username?",
      //variable name i want it stored to
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "Please describe guidelines for contribution",
      //the variable where this got stored
      name: "contribution",
    },
  ])
  .then((answers) => {
    const {
      title,
      description,
      //   installation,
      //   usage,
      //   github,
      //   email,
      //   contribution,
    } = answers;

    const generateReadMe = `
# ${title}

## Description

${description}`;

    fs.writeFile("ReadMe.md", generateReadMe, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
