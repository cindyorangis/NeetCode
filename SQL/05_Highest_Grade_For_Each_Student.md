# Highest Grade For Each Student

## Question (Medium)
You are given an `exam_results` table containing student exam scores.

| Column Name | Type |
|-------------|------|
| student_id  | int  |
| exam_id     | int  |
| score       | int  |

`(student_id, exam_id)` is the primary key (combination of columns with unique values) for this table. Each row represents a student's score on a particular exam. The `score` column is never NULL.

Write a query to find each student's highest score along with the corresponding `exam_id`. If a student has the same highest score on multiple exams, return the one with the smallest `exam_id`.

Return the `student_id`, `exam_id`, and `score`, ordered by `student_id` in ascending order.

### Example 1:

Input:

`exam_results` table:

| student_id | exam_id | score |
|------------|---------|-------|
| 1          | 101     | 85    |
| 1          | 102     | 92    |
| 2          | 101     | 88    |
| 2          | 102     | 88    |
| 3          | 101     | 70    |
| 3          | 102     | 65    |
| 3          | 103     | 78    |

Output:

| student_id | exam_id | score |
|------------|---------|-------|
| 1          | 102     | 92    |
| 2          | 101     | 88    |
| 3          | 103     | 78    |

### Explanation:
- Student 1: Highest score is 92 on exam 102
- Student 2: Both exams have score 88, so we pick exam 101 (smallest exam_id)
- Student 3: Highest score is 78 on exam 103

### Constraints:
- Each (student_id, exam_id) combination is unique.
- score is always a non-null integer.
