const Employee = require('./Employee');

class Intern extends Employee {
    constructor(data) {
        // call parent constructor
        super(data.name, data.id, data.email);

        this.school = data.school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return this;
    };
}

module.exports = Intern;
