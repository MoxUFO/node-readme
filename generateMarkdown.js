// This function render the badge for the readme file.
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// This function renders the license section of the readme
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n\nThis Project is under the ${license} license`;
  }
  return '';
}

// TODO: thisfunction handles the entire read me template.
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
