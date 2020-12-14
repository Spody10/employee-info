const { test, expect } = require('@jest/globals');
const Engineer = require ('../lib/Engineer');


test('creates Engineer object', () => {
    const engineer = new Engineer('jane@gitHub.com');

    expect(engineer.getGitHub()).toBe('jane@gitHub.com');
    expect(engineer.getRole()).toBe('Engineer');
});

