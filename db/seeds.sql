INSERT INTO department
(name) 
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role(title,salary,departmentID) VALUES ("Sales Lead", 100000, 1);
INSERT INTO role(title,salary,departmentID) VALUES ("Sales Person", 80000, 1);
INSERT INTO role(title,salary,departmentID) VALUES ("Lead Engineer", 200000, 2);
INSERT INTO role(title,salary,departmentID) VALUES ("Software Engineer", 180000, 2);
INSERT INTO role(title,salary,departmentID) VALUES ("Accountant", 150000, 3);
INSERT INTO role(title,salary,departmentID) VALUES ("Legal Team Lead", 200000, 4);
INSERT INTO role(title,salary,departmentID) VALUES ("Lawyer", 100000, 4);


INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Faduma", "Abdi", 1, NULL);
INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Ahmed", "Abdi", 2, 1);
INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Guled", "Abdi", 3, NULL);
INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Liban", "Abdi", 4, 3);
INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Bashir", "Abdi", 6, NULL);
INSERT INTO employee(firstName, lastName,roleID, managerID) VALUES ("Amina", "Horris", 7, NULL);
