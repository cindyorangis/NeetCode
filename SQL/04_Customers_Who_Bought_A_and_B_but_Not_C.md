# Customers Who Bought A and B but Not C

## Question (Medium)
You are given two tables: `customers` and `orders`.

customers table:

| Column Name | Type |
| --- | --- |
| customer_id | int |
| customer_name | varchar |

`customer_id` is the primary key for this table. Each row contains a customer's ID and name.

orders table:

| Column Name | Type |
| --- | --- |
| order_id | int |
| customer_id | int |
| product_name | varchar |

`order_id` is the primary key for this table. `customer_id` references the customers table. Each row represents an order placed by a customer for a specific product.

Write a query to find customers who purchased both products `'A'` and `'B'` but have never purchased product `'C'`. These are potential customers to target for product C recommendations.

Return the `customer_id` and `customer_name` of these customers, ordered by `customer_name`.

### Example 1:

Input:

`customers` table:

| customer_id | customer_name |
| --- | --- |
| 1 | Alice |
| 2 | Bob |
| 3 | Carol |
| 4 | Dave |

`orders` table:

| order_id | customer_id | product_name |
| --- | --- | --- |
| 101 | 1 | A |
| 102 | 1 | B |
| 103 | 1 | D |
| 104 | 1 | C |
| 105 | 2 | A |
| 106 | 3 | A |
| 107 | 3 | B |
| 108 | 3 | D |
| 109 | 4 | C |

Output:

| customer_id | customer_name |
| --- | --- |
| 3 | Carol |

### Explanation:
- Alice (ID 1): Bought A and B, but also bought C → excluded
- Bob (ID 2): Only bought A (missing B) → excluded
- Carol (ID 3): Bought A and B, never bought C → included
- Dave (ID 4): Only bought C (missing A and B) → excluded

### Constraints:
- Each customer has a unique ID.
- A customer can purchase the same product multiple times.