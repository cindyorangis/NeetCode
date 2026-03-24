# Calculate Special Bonus
## Question (Easy)

You are given an `employees` table containing employee information.

| Column Name | Type |
| --- | --- |
| employee_id | int |
| name | varchar |
| salary | int |

`employee_id` is the primary key (column with unique values) for this table. Each row contains the employee's ID, name, and salary.

Write a query to calculate the bonus for each employee. An employee receives a bonus equal to 100% of their salary if:

1. Their `employee_id` is an odd number, AND
2. Their name does not start with the letter `'M'`

Otherwise, the bonus is `0`.

Return the `employee_id` and `bonus` for each employee, ordered by `employee_id`.

### Example 1:

Input:

`employees` table:

| employee_id | name | salary |
| --- | --- | --- |
| 1 | John | 5000 |
| 2 | Sarah | 4000 |
| 3 | Mark | 6000 |
| 4 | Emily | 4500 |
| 5 | David | 5500 |

Output:

| employee_id | bonus |
| --- | --- |
| 1 | 5000 |
| 2 | 0 |
| 3 | 0 |
| 4 | 0 |
| 5 | 5500 |

Explanation:

- Employee 1 (John): ID is odd and name doesn't start with 'M' → bonus = 5000
- Employee 2 (Sarah): ID is even → bonus = 0
- Employee 3 (Mark): ID is odd but name starts with 'M' → bonus = 0
- Employee 4 (Emily): ID is even → bonus = 0
- Employee 5 (David): ID is odd and name doesn't start with 'M' → bonus = 5500

Constraints:

Each employee has a unique ID.