const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const mockData = require('../src/mockAnswers');

// array of questions for user prompts
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter an employee's name:",
        validate: nameInput => {
            if (nameInput && !nameInput.includes(/[^a-zA-Z\s]/g)) {
                return true;
            } else {
                console.log('You must enter a valid name! (No numbers or symbols)');
                return false;
            };
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a valid employee ID. (numbers only)");
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's work email?",
        validate: emailInput => {
            if (emailInput && nameInput.matches(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)) {
                return true;
            } else {
                console.log("Please enter a valid email address");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Intern', 'Engineer']
    },
    {
        type: 'number',
        name: 'officeNum',
        message: "What is this manager's office number?",
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is this intern's email?",
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this engineer's GitHub username?",
        validate: username => {
            if (username && !username.matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
                return true;
            } else {
                console.log("Please enter a valid GitHub username. (must begin and end with alphanumeric characters, can include hyphens but not consecutively, have a max of 39 characters");
                return false;
            }
        },
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    }
];
