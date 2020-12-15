const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');


test('creates Intern object', () => {
    const intern = new Intern ('Joe', 1, 'joe@email.com', 'Notre Dame');

    expect(intern.getSchool()).toBe('Notre Dame');
    expect(intern.getRole()).toBe('Intern');
});