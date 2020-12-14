const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (github) {
        super();
        this.github = github;
        this.role = 'Engineer';
    }
    
    getGitHub() {
        return this.github;
    }
};
module.exports = Engineer;