const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data) {
        // call parent constructor
        super(data.name, data.id, data.email);

        this.github = data.github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;
