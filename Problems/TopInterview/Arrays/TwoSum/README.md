# Two Sum

## Question

Given an array of integers ```nums``` and an integer ```target```, return _indices of the two numbers such that they add up to_ ```target```.

You may assume that each input would have exactly **one solution**, and _you may not use the same element twice_.

You can return the answer in any order.

## Contrains

- ```2 <= nums.length <= 10^4```
- ```-10^9 <= nums[i] <= 10^9```
- ```-10^9 <= target <= 10^9```

### Example 1

```markdown

INPUT: nums = [2,7,11,15], target = 9

OUTPUT: [0, 1]

EXPLANATION:
Because nums[0] + nums[1] == 9, we return [0, 1]
```

### Example 2

```markdown

INPUT: nums = [3,2,4], target = 6

OUTPUT: [1,2]
```

### Example 3

```markdown

INPUT: nums = [3,3], target = 6

OUTPUT: [0,1]
```
