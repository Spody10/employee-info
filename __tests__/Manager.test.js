const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager(615);

    expect(manager.pNumber).toEqual(615);
    expect(manager.getRole()).toBe('Manager');
});