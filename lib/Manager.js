const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data) {
        console.log(data);
        // call parent constructor
        super(data.name, data.id, data.email);

        this.officeNumber = data.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this;
    }
}

module.exports = Manager;
