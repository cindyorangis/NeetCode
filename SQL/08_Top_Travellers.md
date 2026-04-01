# Top Travellers

## Question (Easy)
Given two tables, `users` and `rides`, write a query to calculate the total distance traveled by each user.

`users` table:

| Column Name | Type |
| --- | --- |
| id | int |
| name | varchar |

The `id` column is the primary key. This table contains user information including their unique ID and name.

`rides` table:

| Column Name | Type |
| --- | --- |
| id | int |
| user_id | int |
| distance | int |

The `id` column is the primary key. Each row represents a trip where `user_id` indicates who took the trip and `distance` is how far they traveled.

Write a SQL query that reports the total distance each user has traveled. Return the results sorted by `travelled_distance` in descending order. If multiple users have the same total distance, sort them by `name` in ascending order.

### Example 1:

Input:

`users` table:

| id | name |
| --- | --- |
| 1 | Maria |
| 2 | Carlos |
| 3 | Priya |
| 4 | James |

`rides` table:

| id | user_id | distance |
| --- | --- | --- |
| 1 | 1 | 150 |
| 2 | 2 | 280 |
| 3 | 3 | 195 |
| 4 | 1 | 130 |
| 5 | 2 | 95 |

Output:

| name | travelled_distance |
| --- | --- |
| Carlos | 375 |
| Maria | 280 |
| Priya | 195 |
| James | 0 |

### Explanation:
- Carlos has two trips totaling 375 miles (280 + 95).
- Maria has two trips totaling 280 miles (150 + 130).
- Priya has one trip of 195 miles.
- James has no rides recorded, so their traveled distance is 0.