# Doctor Lookup

#### A program for searching for health professionals - 4/27/2018

#### By **Ami**

## Description

A program that will search for doctors within a database using user criteria using the BetterDoctor API

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Program takes medical issue and returns list of specialists in that area | "Ear infection" | [Doctors of Audiology] |
| Program takes doctor name or partial name returns list of doctors with that name | "Smith" | "Dr. Smith, Dr. Smith-Doe" |
| Program returns doctor's first name, last name, address, phone number, and if the doctor is accepting new patients if they fit the criteria | "Smith" | "Dr. Robert Smith, 123 Main St., Portland, OR. 503-555-1234, Not accepting new patients at this time" |
| Program returns error message if API call fails | *failed API call | "Request timeout, server could not be reached at this time. Please try again later." |
| Program returns error message if no search criteria is met | "Hawaiian Cat Flu" | "Sorry, there are no doctors related to that criteria, please try another search" |





## Setup/Installation Requirements

1. Clone from GitHub repository [https://github.com/amiraine/doctor-api.git]
2. Navigate to project root directory and run `npm install` in terminal to install dependencies for webpack.
3. Acquire an API key from https://developer.betterdoctor.com/
4. Create file called '.env' in the root directory of the project.
5. inside of the .env file, add the API key using the following: `exports.apiKey=YOUR-API-KEY`
6. To view the site, run `npm run start` in the terminal while in the root directory. 

## Known Bugs
* No known bugs at this time.

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
  * Babel
  * ESLint
  * Jasmine
  * Karma
  * Webpack

## Support and contact details

_Email the authors with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Ami}_**
