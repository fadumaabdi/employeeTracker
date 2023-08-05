INSERT INTO department
(name) 
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role(id,title,salary,departmentID) VALUES (1, "Sales Lead", 100000, 1);
INSERT INTO role(id,title,salary,departmentID) VALUES (2, "Sales Person", 80000, 1);
INSERT INTO role(id,title,salary,departmentID) VALUES (3, "Lead Engineer", 200000, 2);
INSERT INTO role(id,title,salary,departmentID) VALUES (4, "Software Engineer", 180000, 2);
INSERT INTO role(id,title,salary,departmentID) VALUES (5, "Accountant", 150000, 3);
INSERT INTO role(id,title,salary,departmentID) VALUES (6, "Legal Team Lead", 200000, 4);
INSERT INTO role(id,title,salary,departmentID) VALUES (7, "Lawyer", 100000, 4);


INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (1,"Faduma", "Abdi", 1, NULL);
INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (2,"Ahmed", "Abdi", 2, 1);
INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (3,"Guled", "Abdi", 3, NULL);
INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (4,"Liban", "Abdi", 4, 3);
INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (5,"Bashir", "Abdi", 6, NULL);
INSERT INTO employee(id, firstName, lastName,roleID, managerID) VALUES (6,"Amina", "Horris", 7, NULL);
