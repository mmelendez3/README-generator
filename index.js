// // TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// const generatePage = require('./utils/generateMarkdown')
const generateMarkdown = require('./utils/generateMarkdown')


// // TODO: Create an array of questions for user input
const questions = [

      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true
            }else {
                console.log('Please enter your project Title.')
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'give a short description of the project.',
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
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
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
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
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
        choices: ['MIT', 'BSD', 'Apache', 'GPL', 'Unlicensed']
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
        message: 'provide examples on how to test this application.',
      },
      {
        type: 'input',
        name: 'username',
        message: 'enter your github username. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            }else {
                console.log('Please enter your github username!')
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'enter your email. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            }else {
                console.log('Please enter your email!')
                return false
            }
        }
      },
    
  

]
  
//   promptUser()
//   .then(portfolioData => {
//       const pageREADME = generatePage(portfolioData)

//       fs.writeFile('./dist/README.md', pageREADME, err => {
//        if (err) throw new Error (err);
  
      
//    });

//   })

  // // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log("ERROR: " + err)
        }
    })
}


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("creating readme")
        writeToFile("./dist/README.md", generateMarkdown(responses))
    })
} 


  // // Function call to initialize app
init()
