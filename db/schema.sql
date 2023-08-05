DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role
(
    id INT NOT NULL  PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL, 
    departmentID INT,
    FOREIGN KEY (departmentID)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    roleID INT,
    managerID INT,
    FOREIGN KEY (roleID)
    REFERENCES role(id)
    ON DELETE SET NULL
);
