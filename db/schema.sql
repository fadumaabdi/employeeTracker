DROP DATABASE IF EXISTS employee_db_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENTS PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role
(
    id INT NOT NULL AUTO_INCREMENTS PRIMARY KEY,
    name VARCHAR(30),
    salary DECIMAL, 
    departmentID INT,
    FOREIGN KEY (departmentID)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee_db
(
    id INT NOT NULL AUTO_INCREMENTS PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    roleID INT,
    managerID INT
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);
