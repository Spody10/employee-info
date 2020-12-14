const Employee = require('./Employee');

class Manager extends Employee {
    constructor(pNumber) {
        super();
        this.pNumber = pNumber;
        this.role = 'Manager';
    }
}

module.exports = Manager;