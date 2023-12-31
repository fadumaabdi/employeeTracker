# employeeTracker


## Project Description 

This project involved building a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. This application will allow non-developers to easily view and interact with information stored in the employee database.

# Usage

1. In order to run the application, invoke `node index.js`


2. You are then presented with the main menu: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

3. Select the function you would like to run. 

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
# Installation

1. Pull down and/or branch this repository
2. Run npm i to install all dependencies
3. Install the following version of the `Inquirer`  with `npm i inquirer@8.2.4`
4. Install `MySQL2 Package` with `npm i mysql2`


# Application Preview

[Click here to access the application recording.](https://drive.google.com/file/d/1OkFLk5XztsY39nATpf0TOzmup0LElTdI/view?usp=sharing)

# Links

[Click here to access the files on the github repository.](https://github.com/fadumaabdi/employeetracker)

