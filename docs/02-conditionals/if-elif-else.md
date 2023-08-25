---
sidebar_position: 1
---

# 2.2 if, elif, else

## if statements

### if clause

We can use booleans in conditional statements. A conditional statement allows us to evaluate code only if a certain condition is true. A basic if statement is one that is comprised of only an if clause. Every if statement must at least be comprised of an if clause (no more than one); we will introduce other types of clauses (elif and else) later. The structure of an if clause is as follows:

```python
if <condition>:
    <body>
```

where `<body>` is only evaluated if `<condition>` is True, otherwise the program continues running and evaluating the code following the if statement.

Here's an example:

```python
if num_students > classroom_size:
    print("the classroom is too small")
```

In this example, "the classroom is too small" will only be printed if `num_students` is greater than `classroom_size`. If `num_students` were equal to or smaller than `classroom_size`, this if statement would have no effect.