# Combine Two Tables

## Question (Easy)
Given two tables, `person` and `address`, write a query that combines information from both.

`person` table:

| Column Name | Type |
| --- | --- |
| person_id | int |
| last_name | varchar |
| first_name | varchar |

The `person_id` column is the primary key. This table stores each person's ID along with their first and last name.

`address` table:

| Column Name | Type |
| --- | --- |
| address_id | int |
| person_id | int |
| city | varchar |
| state | varchar |

The `address_id` column is the primary key. Each row links a person (via `person_id`) to their city and state.

Write a SQL query that returns the `first_name`, `last_name`, `city`, and `state` for every person. If a person has no matching address record, return `NULL` for both `city` and `state`.

The result can be returned in any order.

### Example 1:

Input:

`person` table:

| person_id | last_name | first_name |
| --- | --- | --- |
| 1 | Smith | John |
| 2 | Johnson | Emma |

`address` table:

| address_id | person_id | city | state |
| --- | --- | --- | --- |
| 1 | 2 | Los Angeles | California |
| 2 | 3 | Chicago | Illinois |

Output:

| first_name | last_name | city | state |
| --- | --- | --- | --- |
| John | Smith | null | null |
|Emma | Johnson | Los Angeles | California |

### Explanation:
- John Smith (`person_id = 1`) has no address on file, so city and state are NULL.
- Emma Johnson (`person_id = 2`) lives in Los Angeles, California.
- The address record for `person_id = 3` has no matching person, so it does not appear in the output.