# Customers With Positive Revenue

## Question (Easy)
You are given a table `customers` which tracks customer revenue across different years.

| Column Name | Type |
| --- | --- |
| customer_id | int |
| year | int |
| revenue | int |

`(customer_id, year)` is the primary key for this table. The `revenue` can be positive, negative, or zero.

Write a query to find all customers who had positive revenue in the year 2020. Return only the `customer_id` column. The result can be returned in any order.

### Example 1:

Input:

`customers` table:

| customer_id | year | revenue |
| --- | --- | --- |
| 1 | 2019 | 100 |
| 1 | 2020 | 50 |
| 2 | 2020 | -30 |
| 3 | 2019 | 80 |
| 3 | 2020 | 25 |
| 4 | 2020 | 0 |

Output:

| customer_id |
| --- |
| 1 |
| 3 |

Customers 1 and 3 had positive revenue in 2020. Customer 2 had negative revenue, and customer 4 had zero revenue.

### Constraints:
Each customer has at most one revenue entry per year.