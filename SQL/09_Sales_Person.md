# Sales Person
## Question (Easy)
Given three tables containing information about sales representatives, companies, and orders, write a query to find salespeople who have never made sales to a specific company.

`sales_person` table:

| Column Name | Type |
| --- | --- |
| sales_id | int |
| name | varchar |
| salary | int |
| commission_rate | int |
| hire_date | date |

The `sales_id` column is the primary key. Each row contains information about a salesperson including their name, salary, commission rate, and when they were hired.

`company` table:

| Column Name | Type |
| --- | --- |
| com_id | int |
| name | varchar |
| city | varchar |

The `com_id` column is the primary key. Each row contains the company's ID, name, and the city where it is located.

`orders` table:

| Column Name | Type |
| --- | --- |
| order_id | int |
| order_date | date |
| com_id | int |
| sales_id | int |
| amount | int |

The `order_id` column is the primary key. The `com_id` column references the `company` table, and `sales_id` references the `sales_person` table. Each row represents an order with the company, salesperson, date, and amount.

Write a SQL query to find the names of all salespeople who have not made any orders with the company named "CRIMSON".

Return the result in any order.

### Example 1:

Input:

`sales_person` table:

| sales_id | name | salary | commission_rate | hire_date |
| --- | --- | --- | --- | --- |
| 1 | Alice | 95000 | 8 | 2018-03-15 |
| 2 | Bob | 45000 | 12 | 2019-07-22 |
| 3 | Carol | 72000 | 10 | 2017-11-01 |
| 4 | Dave | 38000 | 15 | 2020-02-14 |
| 5 | Eve | 52000 | 6 | 2016-09-30 |

`company` table:

| com_id | name | city |
| --- | --- | --- |
| 1 | CRIMSON | Seattle |
| 2 | AZURE | Portland |
| 3 | GOLDEN | Denver |
| 4 | EMERALD | Chicago |

`orders` table:

| order_id | order_date | com_id | sales_id | amount |
| 1 | 2021-01-10 | 3 | 4 | 15000 |
| 2 | 2021-02-20 | 4 | 5 | 8000 |
| 3 | 2021-03-05 | 1 | 1 | 62000 |
| 4 | 2021-04-18 | 1 | 4 | 31000 |

Output:

| name |
| --- |
| Bob |
| Carol |
| Eve |

### Explanation:
- Alice (`sales_id = 1`) has an order with CRIMSON (order 3), so she is excluded.
- Dave (`sales_id = 4`) has an order with CRIMSON (order 4), so he is excluded.
- Bob, Carol, and Eve have no orders with CRIMSON, so they appear in the result.