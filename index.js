const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateHTML = require('./src/generateHTML');
// const generateCSS = require('./src/generateCSS');

// mock data for testing
const mockAnswers = [
    new Manager({
        name: 'Jamie',
        id: '0173',
        email: 'jamie@company.com',
        officeNumber: '05'
    }),
    new Manager({
        name: 'Adrian',
        id: '0180',
        email: 'adrian@company.com',
        officeNumber: '08'
    }),
    new Intern({
        name: 'Harper',
        id: '0249',
        email: 'harper@company.com',
        school: 'Northern National University'
    }),
    new Intern({
        name: 'Drew',
        id: '0249',
        email: 'drew@company.com',
        school: 'Southern National University'
    }),
    new Engineer({
        name: 'Blake',
        id: '0132',
        email: 'blake@company.com',
        github: 'blakecodes'
    }),
    new Engineer({
        name: 'Hayden',
        id: '0217',
        email: 'hayden@company.com',
        github: 'devhayden'
    })
];


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
        name: 'officeNumber',
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
        validate: githubInput => {
            if (githubInput && githubInput.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
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
            let employee;
            // create respective employee object
            switch (answers.role) {
                case 'Manager':
                    employee = new Manager(answers);
                    break;
                case 'Intern':
                    employee = new Intern(answers);
                    break;
                case 'Engineer':
                    employee = new Engineer(answers);
                    break;
            }
            // add employee object to list of employees
            employeeList.push(employee);
            // check if user wants to add another employee
            if (answers.confirmAddEmployee) {
                return promptUser(employeeList);
            } else {
                return employeeList;
            }
        });
}


async function init() {
    // prompt user for info
    // const answers = await promptUser();
    
    // use input to generate markup and write to file

    // generate css and write to file

};

init();
