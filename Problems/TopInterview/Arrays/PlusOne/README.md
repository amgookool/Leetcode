# Plus One

## Question

You are given a **large integer** represented as an integer array ```digits```, where each ```digits[i]``` is the ```ith``` digit of the integer.

The digits are ordered from most significant to least significant in left-to-right order.

The large integer does not contain any leading 0's.

Increment the large integer by **one** and _return the resulting array of digits_.

## Contrains

- ```1 <= digits.length <= 100```
- ```0 <= digits[i] <= 9```
- digits does not contain any leading 0's.

### Example 1

```markdown

INPUT: nums = [1,1,2]

OUTPUT: 2, nums = [1,2,_]

EXPLANATION:
Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2

```markdown

INPUT: nums = [0,0,1,1,1,2,2,3,3,4]

OUTPUT: 5, nums = [0,1,2,3,4,_,_,_,_,_]

EXPLANATION:
Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```
