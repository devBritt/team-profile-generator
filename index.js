const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const mockData = require('./src/mockAnswers');
// const generateHTML = require('./src/generateHTML');
// const generateCSS = require('./src/generateCSS');

// array of questions for user prompts
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter an employee's name:",
        validate: nameInput => {
            if (nameInput && !nameInput.match(/[^a-zA-Z\s]/gi)) {
                return true;
            } else {
                console.log('You must enter a valid name! (No numbers or symbols)');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: idInput => {
            if (idInput && parseInt(idInput)) {
                return true;
            } else {
                console.log('You must enter a valid ID number. (Numbers only)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's work email?",
        validate: emailInput => {
            if (emailInput && emailInput.match(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)) {
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
        type: 'input',
        name: 'officeNum',
        message: "What is this manager's office number?",
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log("You must enter an office number.");
                return false;
            }
        },
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
        message: "What is this intern's school?",
        validate: schoolInput => {
            if (schoolInput && schoolInput.match(/[a-zA-Z\d\s]/i)) {
                return true;
            } else {
                console.log("You must enter this intern's school.");
                return false;
            }
        },
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
            if (username && !username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
                return true;
            } else {
                console.log("Please enter a valid GitHub username. (must begin and end with alphanumeric characters, can include hyphens but not consecutively, have a max of 39 characters)");
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
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
];

// TODO: write a function to write to a file


// TODO: write a function to prompt user
async function promptUser(employeeList) {
    if (!employeeList) {
        // initialize employeeList
        employeeList = [];
    };
    
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);

    return prompt(questions)
        .then(answers => {
            employeeList.push(answers);
            if (answers.confirmAddEmployee) {
                return promptUser(employeeList);
            } else {
                return employeeList;
            }
        });
}


async function init() {
    // prompt user for info
    const answers = await promptUser();
    console.log(answers);
}

init();
