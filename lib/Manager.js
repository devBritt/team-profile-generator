const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data) {
        // call parent constructor
        super(data.name, data.id, data.email);

        this.officeNumber = data.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
