# Evaluate Boolean Expression
## Question (Medium)
You are given two tables: `variables` which stores variable names and their integer values, and `expressions` which contains boolean expressions to evaluate.

`variables table`:

| Column Name | Type |
| --- | --- |
| name | varchar |
| value | int |

The `name` column is the primary key. Each row contains a variable name and its corresponding integer value.

`expressions` table:

| Column Name | Type |
| --- | --- |
| left_operand | varchar |
| operator | enum |
| right_operand | varchar |

The combination of (`left_operand`, `operator`, `right_operand`) forms the primary key. The operator column can be one of: `<`, `>`, or `=`. Both `left_operand` and `right_operand` reference variable names from the `variables` table.

Write a query to evaluate each boolean expression and return the result as `true` or `false`.

The result can be returned in any order.

### Example 1:

Input:

`variables` table:

| name | value |
| --- | --- |
| a | 10 |
| b | 25 |

`expressions` table:

| left_operand | operator | right_operand |
| --- | --- | --- |
| a | > | b |
| a	| < | b |
| a | =	| b |
| b | > | a |
| a | = | a |

Output:

| left_operand | operator | right_operand | value |
| --- | --- | --- | --- |
| a | > | b | false |
| a | < | b | true |
| a | = | b | false |
| b | > | a | true |
| a | = | a | true |

### Explanation:
- `a > b`: 10 > 25 is false
- `a < b`: 10 < 25 is true
- `a = b`: 10 = 25 is false
- `b > a`: 25 > 10 is true
- `a = a`: 10 = 10 is true