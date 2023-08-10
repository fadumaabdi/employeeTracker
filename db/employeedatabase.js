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
            this.db.query("SELECT role.id, role.name, CONCAT('£', FORMAT(salary, 0), ' p/a') as salary, department.name as departmentName FROM role INNER JOIN Department ON role.departmentID = Department.id", (err, results) => {
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
                "SELECT employee.id,CONCAT(employee.firstName,' ', employee.lastName) as name, role.name as roleName,role.salary as salary,department.name as departmentName,FROM employee INNER JOIN role ON employee.roleID = role.id INNER JOIN department ON role.departmentID=department.id LEFT JOIN employee as manager ON employee.managerID = manager.id", (err, results) => {
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
    
    addRole(role) {
        const roleData = {
            name: role.name,
            salary: role.salary,
            departmentID: role.departmentID
        };

        return new Promise((resolve,reject) => {
            this.db.query("INSERT INTO role SET?", roleData, (err,results) => {
                if (err) {
                    reject(err);
                }
                resolve("Role ${role.name} added successfully");
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
            this.db.query("UPDATE employee SET role_id=? WHERE id=?", [employee.roleID, employee.employeeID],(err,results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    } 
    }

    module.exports = employeedatabase;
    
    
            

