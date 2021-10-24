// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (license == "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license == "No License") {
    return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license == "BSD") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license == "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GPL") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "No License") {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicense
  if (license === 'Unlicensed') {
    renderLicense = ""
  }
  else {
    renderLicense = `## License
This project is licensed under ${license}` + renderLicenseLink(license)

  }
  return renderLicense
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `## Table of Contents 

  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  
# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}


## Installation
Follow these instructions to install the application.

${data.installation}


## Usage 

${data.usage}



${renderLicenseSection(data.license)}



## Contributing

${data.contributing}


## Tests

${data.tests}

## Questions

Find me on GitHub: https://github.com/${data.username}
Email me with questions: ${data.email}

`;
};

module.exports = generateMarkdown