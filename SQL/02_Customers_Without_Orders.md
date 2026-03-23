# Customers Without Orders

## Question (Easy)
You are given two tables: `customers` and `orders`.

customers table:

| Column Name | Type |
| --- | --- |
| id | int |
| name | varchar |

`id` is the primary key for this table. Each row contains the ID and name of a customer.

orders table:

| Column Name | Type |
| --- | --- |
| id | int |
| customer_id | int |

`id` is the primary key for this table. `customer_id` references the `id` from the customers table. Each row contains the ID of an order and the ID of the customer who placed it.

Write a query to find all customers who have never placed an order. Return the customer names. The result can be returned in any order.

### Example 1:

Input:

`customers` table:

| id | name |
| --- | --- |
| 1 | Alice |
| 2	| Bob |
| 3	| Charlie |
| 4	| Diana |

`orders` table:

| id | customer_id |
| --- | --- |
| 101 | 3 |
| 102 | 1 |

Output:

| name |
| --- |
| Bob |
| Diana |

Bob and Diana have never placed an order. Alice and Charlie have orders in the orders table.

### Constraints:

Each customer has a unique ID.
Each order references a valid customer.