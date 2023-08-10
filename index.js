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

const startMenuQuestions = () => {
    inquirer.prompt(mainQuestions)
    .then((response) => {
        switch (response.option) {
            case 'viewDepartments':
                viewDepartments();
                break;
                case 'viewRoles':
                viewRoles();
                break;
                case 'viewEmployees':
                viewEmployees();
                break;
                case 'addDepartment':
                addDepartment();
                break;
                case 'addRole':
                addRole();
                break;
                case 'addEmployee':
                addEmployee();
                break;
                case 'updateRole':
                updateRole();
                break;

        }
    })
}


