// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n\nThis Project is under the ${license} license`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdownFile(data) {
  console.log("In my generateMarkdown File")
  console.log(data)
  const {githubname, emailaddress, projectname,description,license, dependencies, test,usage,contribute} = data
  
  return `
# ${projectname}
${renderLicenseBadge(license)}

## Description

${description}

## Table of Content

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributions](#contributions)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${dependencies}

## Usage

${usage}

${renderLicenseSection(license)}

## Contributions

${contribute}

## Tests


${test} 

## Questions

If you have any question about the repo, openan issue or contact me at [${githubname}] (${emailaddress}).
`;
}

module.exports = generateMarkdownFile;
