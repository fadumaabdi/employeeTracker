const inquirer = require('inquirer');
const {mainQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeRoleQuestions}= require('./questions.js')
const employeedatabase = require('./db/employeedatabase.js')
// new instance of employeedatabase class
const db = new employeedatabase({
    host: 'localhost',
    user: 'root',
    password: 'Faduma1998',
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

const viewDepartments = () => {
    //departments from db
    db.getDepartments().then((results) => {
        //show results in console
        console.table (results);
        //show main menu
        startMenuQuestions();
    })
}

const viewRoles = () => {
    //roles from db
    db.getRoles().then((results) => {
        //show results in console
        console.table (results);
        //show main menu
        startMenuQuestions();
    })
}
const viewEmployees = () => {
    //employess from db
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

const addEmployee = () => {
    db.getRoles().then((results) => {
        const roleQuestion = addEmployeeQuestions[2];
        results.forEach((role) => {
            const roleSummary = '${role.title} (${role.departmentName}: ${role.salary})';
            roleQuestion.choices.push({
                value: role.id,
                name: roleSummary
            });
        });

        //Managers list: get employees from db
        db.getEmployees().then((results) => {
 const managerQuestion = addEmployeeQuestions[3];
 results.forEach((employee) => {
    managerQuestion.choices.push({
        value: employee.id,
        name: employee.name 
});
    });

    //blank option for no manager
    managerQuestion.choices.push({
        value: null,
        name: 'None'
    });

    
    inquirer.prompt(addEmployeeQuestions)
    .then((response) => {
        db.addEmployee(response).then((results) => {
            console.log('\n', results, '\n');
            startMenuQuestions();

});
    })
});
    });
}

const updateRole= () => {
    db.getEmployees().then((results) => {
        const employeeQuestion = updateEmployeeRoleQuestions[0];
        results.forEach((employee) => {
           employeeQuestion.choices.push({
               value: employee.id,
               name: employee.name 
           });
        });

        db.getRoles().then((results) => {
            const roleQuestion = updateEmployeeRoleQuestions[1];
            results.forEach((role) => {
                roleQuestion.choices.push({
                    value: role.id,
                    name: role.title

});
            });

            
    inquirer.prompt(updateEmployeeRoleQuestions)
    .then((response) => {
        db.updateEmployeeRoleQuestions(response).then((results) => {
            console.log('\n', results, '\n');
            startMenuQuestions();

        });
    })
});
    });
}

startMenuQuestions();



