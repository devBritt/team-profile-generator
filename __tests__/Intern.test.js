const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        school: 'National University'
    };
    const intern = new Intern(data);

    expect(intern.name).toBe('Brittany');
    expect(intern.id).toBe('234');
    expect(intern.email).toBe('myemail@gmail.com');
    expect(intern.school).toBe('National University');
});

test("gets intern's school", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        school: 'National University'
    };
    const intern = new Intern(data);

    expect(intern.getSchool()).toBe('National University');
});

test("gets intern's role", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        school: 'National University'
    };
    const intern = new Intern(data);

    expect(intern.getRole()).toHaveProperty('name');
    expect(intern.getRole()).toHaveProperty('id');
    expect(intern.getRole()).toHaveProperty('email');
    expect(intern.getRole()).toHaveProperty('school');
});
