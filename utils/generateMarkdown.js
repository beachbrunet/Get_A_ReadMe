// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == "Apache 2.0 Licene") {
    return "\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n";
  }
  if (license == "MIT") {
    return "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
  }
  if (license == "IPL") {
    return "\n[![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)\n";
  } else {
    // If there is no license, return an empty string
    return "";
  }

  // TODO: Create a function that returns the license link
  function renderLicenseLink(license) {
    if (license === "Apache 2.0 Licene") {
      return "(https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "MIT") {
      return "(https://opensource.org/licenses/MIT)";
    } else if (license === "IPL") {
      return "(https://opensource.org/licenses/IPL-1.0)";
    } else {
      // If there is no license, return an empty string
      return "";
    }
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `[license ${license} license.]`;
    } else {
      return "";
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title};

## Description
${data.desciption}

##Table of Contents
*[Desciption](#description)
*[Usage](#Usage)
*[Test](#Test)
*[Questions](#Questions)
*[Constribution](#Contribution)
*[License Resources](#license)

##Tests
${data.test}

## Contribution
${data.contribution}

${renderLicenseSection(data.license)}

`;
  }
}

module.exports = generateMarkdown;
