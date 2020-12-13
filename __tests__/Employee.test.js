const Employee = require('../lib/Employee');


test('creates an Employee object', () => {
    const employee = new Employee('John', 123456, 'john@email.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('returns Employee ID', () => {
    const employee = new Employee('Jane', 654321, 'jane@email.com')
    expect(employee.getID()).toBe('654321');
});

test('returns Employee name', () => {
    const employee = new Employee('Mike', 369, 'mike@email.com');
    expect(employee.getName()).toBe('Mike');
});

test('returns Employee email', () => {
    const employee = new Employee ('Bob', 250, 'bob@email.com');
    expect(employee.getEmail()).toBe('Email: bob@email.com');
});

test('returns Employee role', () => {
    const employee = new Employee('Liv', 789, 'liv@email.com');
    expect(employee.getRole()).toBe('Employee');
})