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
}