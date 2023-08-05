const mainQuestions = [
    {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
            {value: "viewDepartments", name: "View all departments"},
            {value: "viewRoles", name: "View all roles"},
            {value: "viewEmployees", name: "View all employees"},
            {value: "addDepartment", name: "Add a departments"},
            {value: "addRole", name: "Add a role"},
            {value: "updateRole", name: "Update an employee role"},            
        ],
    },
]

const addDepartmentQuestions = [
    {
        type: "input",
        name: "departmentName",
        message: "Enter the name of the new department:",
    },
]

const addRoleQuestions = [
    {
        type: "input",
        name: "roleName",
        message: "Enter the name of the new Role:",
    },

    {
        type: "number",
        name: "salary",
        message: "Enter the salary of the new Role (numerical value):",
        validate: function(value) {
            const valid = !isNaN(parseInt(value));
            return valid || "Please enter a numerical value";
        }
    },

    {
        type: "list",
        name: "departmentID",
        message: "Select the department for the role",
        choices: [

        ],
    },
]

const addEmployeeQuestions = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the employee:",
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the employee:",
    },
    {
        type: "list",
        name: "roleID",
        message: "Selcet the role for the employee:",
    },

    {
        type: "input",
        name: "managerID",
        message: "Select the employees manager:",
        choices: [
        ],
    },
]

const updateEmployeeRoleQuestions = [
    {
        type: "list",
        name: "employeeID",
        message: "Select the employee to update:",
    },
    {
        type: "list",
        name: "roleID",
        message: "Select the employee's new role:",
        choices: [

        ],
    },  
]

module.exports = {mainQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeRoleQuestions}

