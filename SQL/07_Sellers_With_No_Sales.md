# Sellers With No Sales

## Question (Easy)
You are given three tables: `customer`, `orders`, and `seller`.

`customer` table:

| Column Name | Type |
| --- | --- |
| customer_id | int |
| customer_name | varchar |

The `customer_id` column is the primary key. Each row contains information about a customer in the store.

`orders` table:

| Column Name | Type |
| --- | --- |
| order_id | int |
| sale_date | date |
| order_cost | int |
| customer_id | int |
| seller_id | int |

The `order_id` column is the primary key. Each row represents a transaction between a customer and a seller on a given date.

`seller` table:

| Column Name | Type |
| --- | --- |
| seller_id | int |
| seller_name | varchar |

The `seller_id` column is the primary key. Each row contains information about a seller.

Write a query to find the names of all sellers who did not make any sales in the year 2020.

Return the result ordered by `seller_name` in ascending order.

### Example 1:

Input:

`customer` table:

| customer_id | customer_name |
| --- | --- |
| 101 | Sarah |
| 102 | Michael |
| 103 | David |

`orders` table:

| order_id | sale_date | order_cost | customer_id | seller_id |
| --- | --- | --- | --- | --- |
| 1 | 2020-03-15 | 1200 | 101 | 1 |
| 2 | 2020-06-20 | 1800 | 102 | 2 |
| 3 | 2019-04-10 | 950 | 101 | 3 |
| 4 | 2020-11-05 | 750 | 103 | 2 |
| 5 | 2019-01-22 | 600 | 101 | 2 |

`seller` table:

| seller_id | seller_name |
| --- | --- |
| 1 | James |
| 2 | Maria |
| 3 | Robert|

Output:

| seller_name |
| --- |
| Robert |

### Explanation:
- James made 1 sale in March 2020.
- Maria made 2 sales in 2020 and 1 sale in 2019.
- Robert made 1 sale in 2019 but no sales in 2020.