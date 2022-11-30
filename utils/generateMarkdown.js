// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache License 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return badge; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license === 'MIT') {
    link = '[MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache License 2.0') {
    link = '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `Licensed under the ${renderLicenseLink(license)} license.`
}

//TODO: Create a function to generate Table of Contents 
function renderTableOfContents(tableOfContents) {
  let tableOfContentsString = '';
  for (let i = 0; i < tableOfContents.length; i++) {
    tableOfContentsString = tableOfContentsString + `- [${tableOfContents[i]}](#${tableOfContents[i].toLowerCase()})\n`
  }
  return tableOfContentsString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${renderTableOfContents(data.tableOfContents)}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

---

## Contributions

${data.contributions}

## Tests

${data.tests}

## Questions

See the following links to contact me with additional questions:

[GitHub](https://github.com/${data.username}) 

[Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
