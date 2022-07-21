const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        officeNumber: '6'
    };
    const manager = new Manager(data);

    expect(manager.name).toBe('Brittany');
    expect(manager.id).toBe('234');
    expect(manager.email).toBe('myemail@gmail.com');
    expect(manager.officeNumber).toBe('6');
});

test("gets manager's office number", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        officeNumber: '6'
    };
    const manager = new Manager(data);

    expect(manager.getOfficeNumber()).toBe('6');
});

test("gets manager's details", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        officeNumber: '6'
    };
    const manager = new Manager(data);

    expect(manager.getRole()).toBe('Manager');
});
