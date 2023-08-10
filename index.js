const inquirer = require('inquirer');
const {mainQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeRoleQuestions}= require('.questions.js')

// new instance of employeedatabase class
const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Accessgranted!',
    database: 'employee_db'
});

// connect to database
db.connect();

