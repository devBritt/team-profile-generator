class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    // return employee name
    getName() {
        return this.name;
    }

    // return employee id
    getId() {
        return this.id;
    }

    // return employee email
    getEmail() {
        return this.email;
    }

    // return Employee object
    getRole() {
        return this;
    }
}

module.exports = Employee;
