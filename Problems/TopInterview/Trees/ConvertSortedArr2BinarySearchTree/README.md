# Reverse String

## Question

## Contrains

- ```1 <= prices.length <= 3 * 10^4```
- ```0 <= nums[i] <= 10^4```

### Example 1

```markdown

INPUT: prices = [7,1,5,3,6,4]

OUTPUT: 7

EXPLANATION:
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

### Example 2

```markdown

INPUT: prices = [1,2,3,4,5]

OUTPUT: 4

EXPLANATION:
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

### Example 3

```markdown

INPUT: prices = [7,6,4,3,1]

OUTPUT: 0

EXPLANATION:
There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```
