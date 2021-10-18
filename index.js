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
        message: 'Would you like to include a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about the table of contents:',
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
        message: 'What are the steps required to install your project? (Required)',
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
        message: 'Describe the usage of the application! (Required)',
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
    ]);
  };
  
  promptUser()
  .then(portfolioData => {
      const pageREADME = generatePage(portfolioData)

      fs.writeFile('README.md', pageREADME, err => {
       if (err) throw new Error (err);
  
      
   });

  })