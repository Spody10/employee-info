class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    // Get employee name returned
    getName() {
        return this.name;
    }
    // Get employee ID returned
    getId() {
        return this.id;
    }
    // Get employee emial returned
    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee;