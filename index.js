const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');
const { type } = require('os');
const Employee = require('./lib/Employee');

const teamMembers = [];


// function for creating manager - inquirer questions
// take those questions and create a new Manager with the user provided answers
function managerQuestions() {
  return inquirer
    .prompt([{
      name: 'name',
      type: 'input',
      message: 'What is the name of the manager?'
    },
    {
      name: 'idNum',
      type: 'input',
      message: 'What is thier ID code?',
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is their email?',
    },
    {
      name: 'office',
      type: 'input',
      message: 'What is thier office number?'
    }
    ])
    .then((data) => { return data })
}

function mainMenuDest() {
  return inquirer
    .prompt([{
      name: 'destination',
      type: 'list',
      message: 'What are you going to do?',
      choices: ['Add a teammate', 'Print HTML'],
    }])
    .then((data) => { return data })
}

// push that new Manager to the team members array
function addMember(employee) {
  teamMembers.push(employee)
}
// follow the same pattern for each type of employee
// build a function for them that uses inquirer
function engineerQeustions() {
  return inquirer
    .prompt([{
      name: 'name',
      type: 'input',
      message: 'What is their name?'
    },
    {
      name: 'idNum',
      type: 'input',
      message: 'What is their ID code?',
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is their email?'
    },
    {
      name: 'gitHub',
      type: 'input',
      Message: 'What is their GitHub username?'
    }
    ])
    .then((data) => { return data })
}

function internQeustions() {
  return inquirer
    .prompt([{
      name: 'name',
      type: 'input',
      message: 'What is their name?'
    },
    {
      name: 'idNum',
      type: 'input',
      message: 'What is their ID code?',
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is their email?'
    },
    {
      name: 'school',
      type: 'input',
      Message: 'What school do they attend?'
    }
    ])
    .then((data) => { return data })
}


// STRUCTURING IT

// start with manager function, since every team needs a manager
function teamChoice() {
  return inquirer
    .prompt(
      [
        {
          name: 'destination',
          type: 'list',
          message: 'Which employee are you adding?',
          choices: ['Engineer', 'Intern'],
        }
      ]
    )
    .then((data) => { return data })
}
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

async function mainMenu() {

  console.log(teamMembers);
  let menuDest = await mainMenuDest()
  if (menuDest.destination == 'Add a teammate') {
    menuDest = await teamChoice()

    if (menuDest.destination == 'Engineer') {
      menuDest = await engineerQeustions()
      addMember(menuDest)
      mainMenu()
    }
    if (menuDest.destination == 'Intern') {
      menuDest = await internQeustions()
      addMember(menuDest)
      mainMenu()
    }
  } else {

  }
}

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js







async function onstart() {
  const manager = await managerQuestions()
  addMember(manager)
  mainMenu()
}




onstart()