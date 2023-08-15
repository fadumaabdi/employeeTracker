const database= require('./database.js');

class employeedatabase extends database {
    constructor(options) {
        super(options);
    }

    getDepartments() {
        return new Promise((resolve,reject) => {
            this.db.query("SELECT * FROM department", (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getRoles() {
        return new Promise((resolve,reject) => {
            this.db.query("SELECT roles.id, roles.title, CONCAT('£', FORMAT(salary, 0), ' p/a') as salary, department.name as departmentName FROM roles INNER JOIN Department ON roles.departmentID = Department.id", (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    
    getEmployees() {
        return new Promise((resolve,reject) => {
            this.db.query(
                "SELECT \
                employee.id,\
                CONCAT(employee.firstName,' ', employee.lastName) as name,\
                roles.title as roleName,\
                roles.salary as salary,\
                department.name as departmentName\
                FROM employee\
                INNER JOIN roles ON employee.roleID = roles.id\
                INNER JOIN department ON roles.departmentID=department.id\
                LEFT JOIN employee as manager ON employee.managerID = manager.id"
                , (err, results) => {
            if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    addDepartment(department){
        return new Promise((resolve,reject) => {
            this.db.query("INSERT INTO department SET?", {name: department.departmentName}, (err,results) => {
                if (err) {
                    reject(err);
                }
                resolve("Department ${department.departmentName} added successfully");
            });
        });
    } 
    
    addRole(roles) {
        const roleData = {
            title: roles.roleName,
            salary: roles.salary,
            departmentID: roles.departmentID
        };

        return new Promise((resolve,reject) => {
            this.db.query("INSERT INTO roles SET?", roleData, (err,results) => {
                if (err) {
                    reject(err);
                }
                resolve("Roles ${roles.title} added successfully");
            });
        });
    } 
        
    addEmployee(employee) {
        const employeeData = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            roleID: employee.roleID,
            managerID: employee.managerID,
        };

        return new Promise((resolve,reject) => {
            this.db.query("INSERT INTO employee SET?", employeeData, (err,results) => {
                if (err) {
                    reject(err);
                }
                resolve("${employee.firstName} ${employee.lastName} added successfully");
            });
        });
    } 

    updateEmployeeRole(employee){
        return new Promise((resolve,reject) => {
            this.db.query("UPDATE employee SET roleID=? WHERE id=?", [employee.roleID, employee.employeeID],(err,results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    } 
    }

    module.exports = employeedatabase;
    
    
            

