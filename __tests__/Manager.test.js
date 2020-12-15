const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Bob', 2, 'bob@email.com', 615);

    expect(manager.officeNumber).toEqual(615);
    expect(manager.getRole()).toBe('Manager');
});