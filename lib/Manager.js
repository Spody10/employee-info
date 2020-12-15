const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
        this.role = 'Manager';
    }
     // Get number of manager returned
}   
   

module.exports = Manager;