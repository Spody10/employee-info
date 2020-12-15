const { test, expect } = require('@jest/globals');
const Engineer = require ('../lib/Engineer');


test('creates Engineer object', () => {
    const engineer = new Engineer('Jane', 3, 'jane@email.com','janehub');

    expect(engineer.getGitHub()).toBe('janehub');
    expect(engineer.getRole()).toBe('Engineer');
});

