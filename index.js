const inquirer = require("inquirer");
const GenerateHTML = require('./lib/GenerateHTML');
const fs = require("fs");
const writeFile = require('./lib/WriteToPage');
const info = [];

// Start App

const init = (info) => {
  //array to store employees
  if(!info.storage) {
    info.storage = []
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name:',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You must enter employee name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID number:',
      validate: idInput => {
        if(idInput) {
          return true;
        } else {
          console.log('Not a valid ID number. Please re-enter!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employees email address:',
      validate: emailInput => {
        if(emailInput) {
          return true;
        } else {
          console.log('You must enter a valid email address!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'role',
      message: 'Please select employee role:',
      choices: ['Intern', 'Engineer', 'Manager'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter engineers GitHub link:',
      when: ({role}) => {
        if (role === 'Engineer') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the interns school:',
      when: ({role}) => {
        if (role === 'Intern') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please enter Managers office number:',
      when: ({role}) => {
        if(role === 'Manager') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'addEmployee',
      message: 'Would you like to add an additional employee?',
      default: false
    }
  ]).then(employeeData => {
    // save into array
    info.storage.push(employeeData);
    if(employeeData.addEmployee) {
      return init(info);
    } else {
      return info;
    }
  })
};
// html is generated
init(info)
.then((data) => {
  return GenerateHTML(data);
})
.then(write => {
  fs.writeFile(write);
});
