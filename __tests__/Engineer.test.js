const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        github: 'devBritt'
    };
    const engineer = new Engineer(data);

    expect(engineer.name).toBe('Brittany');
    expect(engineer.id).toBe('234');
    expect(engineer.email).toBe('myemail@gmail.com');
    expect(engineer.github).toBe('devBritt');
});

test("gets engineer's github", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        github: 'devBritt'
    };
    const engineer = new Engineer(data);

    expect(engineer.getGithub()).toBe('devBritt');
});

test("gets engineer's role", () => {
    const data = {
        name: 'Brittany',
        id: '234',
        email: 'myemail@gmail.com',
        github: 'devBritt'
    };
    const engineer = new Engineer(data);

    expect(engineer.getRole()).toHaveProperty('name');
    expect(engineer.getRole()).toHaveProperty('id');
    expect(engineer.getRole()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('github');
});
