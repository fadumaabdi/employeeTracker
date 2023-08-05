const mainquestions = [
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
        message: "Selcet the department for the role",
    },
]
