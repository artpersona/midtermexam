# Part 1 - Multiple Choice

1. b
2. a
3. a
4. a
5. a
6. a
7. d
8. b
9. c
10. b

# Part 2 - True or False

1. True
2. True
3. True
4. False
5. True
6. True
7. False
8. False
9. True
10. True

# Part 3 - Version Control Using Git and Github
- I was able to push all the scripts for different branches.
- What I did was checkout of the branch im using then paste all the files for that branch
- I repeated this process for all the branches


# Part 4 - Web Server Programming
-- This is my  PostgreSQL scripts 

- 1 
SELECT count(*)"Number of jobs" from "perez_MidtermExam".jobs;
- 2
SELECT AVG(DISTINCT salary) "Average Salary" from "perez_MidtermExam".employees;
- 3
SELECT SUM(salary) "Total Salary" from "perez_MidtermExam".employees;
- 4
SELECT MIN(last_name) "First name that comes first in the alphabet" from "perez_MidtermExam".employees;
- 5
SELECT MAX(last_name) "Last name that comes first in the alphabet" from "perez_MidtermExam".employees;
- 6 
SELECT department_id "Department",MAX(salary) "Maximum Salary" FROM "perez_MidtermExam".employees GROUP BY department_id;
- 7
SELECT * FROM "perez_HR".employees WHERE salary > ALL(SELECT avg(salary) FROM "perez_HR".employee GROUP BY department_id)
- 8
SELECT * FROM "perez_HR".employees WHERE salary > ALL(SELECT avg(salary) FROM "perez_HR".employee GROUP BY department_id)
- 9 
SELECT COUNT(DISTINCT job_id)"Number of Jobs" from "perez_MidtermExam".employees;
- 10
SELECT  department_id "Department", AVG(salary)"Average Salary", COUNT(*) "No. of Employees" from "perez_MidtermExam".employees GROUP BY department_id HAVING department_id = 90;


- my node js scripts are located in the hr branch of this repository


# User name and password
user = johnpaulperez
password = terrano123