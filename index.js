// // TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown')


// // TODO: Create an array of questions for user input
// const questions = [];


// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


//Code For Project starts HERE 

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs





const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            }else {
                console.log('Please enter your project Title!')
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'give a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            }else {
                console.log('Please enter a description for your project!')
                return false
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'If your README is very long, add a table of contents to make it easy for users to find what they need. Would you like to include a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide a brief description about the table of contents:',
        validate: tocInput => {
            if (tocInput) {
                return true
            }else {
                console.log('Please enter a brief description for table of contents! (Required) ')
                return false
            }
        },
        when: ({confirmAbout}) => {
            if (confirmAbout) {
                return true
            }else {
                return false
            }
        }
    },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true
            }else {
                console.log('Please enter how to install application!')
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:```md![alt text](assets/images/screenshot.png)``` (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true
            }else {
                console.log('Please explain the usage of your application!')
                return false
            }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license is the application covered under? (Check all that apply)',
        choices: ['MIT', 'BSD', 'ISC', 'Apache', 'GPL',]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. (Required)',
        validate: contributeInput => {
            if (contributeInput) {
                return true
            }else {
                console.log('Please enter your project Title!')
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'enter your github username with link to github profile, an email and instructions on how to reach you with additional questions. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            }else {
                console.log('Please enter your project Title!')
                return false
            }
        }
      },
    ]);
  };
  
  promptUser()
  .then(portfolioData => {
      const pageREADME = generatePage(portfolioData)

      fs.writeFile('README.md', pageREADME, err => {
       if (err) throw new Error (err);
  
      
   });

  })