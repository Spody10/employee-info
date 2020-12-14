const { SummaryReporter } = require('@jest/reporters');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;