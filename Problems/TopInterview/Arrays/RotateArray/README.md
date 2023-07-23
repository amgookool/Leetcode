# Rotate Array

## Question

Given an integer array ```nums```, rotate the array to the right by ```k``` steps, where ```k``` is non-negative.

## Contrains

- ```1 <= nums.length <= 10^5```
- ```-2^31 <= nums[i] <= 2^31 - 1```
- ```0 <= k <= 10^5```

### Example 1

```markdown

INPUT: nums = [1,2,3,4,5,6,7], k = 3

OUTPUT: [5,6,7,1,2,3,4]

EXPLANATION:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

### Example 2

```markdown

INPUT: nums = [-1,-100,3,99], k = 2

OUTPUT: [3,99,-1,-100]

EXPLANATION:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```
