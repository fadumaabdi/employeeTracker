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

const viewEmployees = () => {
    //departments from db
    db.getEmployees().then((results) => {
        //show results in console
        console.table (results);
        //show main menu
        startMenuQuestions();
    })
}

const addDepartment = () => {
    inquirer.prompt(addDepartmentQuestions)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('\n', results, '\n');
            startMenuQuestions();
        })
    })
}

const addRole = () => {
    db.getDepartments().then((results) => {
        const departmentQuestion = addRoleQuestions[2];
        results.forEach((department) => {
            departmentQuestion.choices.push({
                value: department.id,
                name: department.name
            });
        });
    });

    inquirer.prompt(addRoleQuestions)
    .then((response) => {
        db.addRole(response).then((results) => {
            console.log('\n', results, '\n');
            startMenuQuestions();
});
    })
}


