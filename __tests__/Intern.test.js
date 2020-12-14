const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern ('Notre Dame');

    expect(intern.getSchool()).toBe('Notre Dame');
    expect(intern.getRole()).toBe('Intern');
});