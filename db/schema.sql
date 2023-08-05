DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE employeedatabase_db;

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

