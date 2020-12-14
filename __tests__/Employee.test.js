const Employee = require('../lib/Employee');


test('creates an Employee object', () => {
    const employee = new Employee('John', 123456, 'john@email.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(123456);
    expect(employee.email).toBe('john@email.com');
});

