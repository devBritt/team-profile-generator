const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Brittany', '234', 'myemail@gmail.com');

    expect(employee.name).toBe('Brittany');
    expect(employee.id).toBe('234');
    expect(employee.email).toBe('myemail@gmail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Brittany', '234', 'myemail@gmail.com');

    expect(employee.getName()).toBe('Brittany');
});

test("gets employee's id", () => {
    const employee = new Employee('Brittany', '234', 'myemail@gmail.com');

    expect(employee.getId()).toBe('234');
});

test("gets employee's email", () => {
    const employee = new Employee('Brittany', '234', 'myemail@gmail.com');

    expect(employee.getEmail()).toBe('myemail@gmail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Brittany', '234', 'myemail@gmail.com');

    expect(employee.getRole()).toHaveProperty('name');
    expect(employee.getRole()).toHaveProperty('id');
    expect(employee.getRole()).toHaveProperty('email');
});
