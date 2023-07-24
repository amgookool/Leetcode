# Dynamic Programming Tutorial (FreeCodeCamp)

## Memoization Recipe

1. Make it work
    - Visualize the problem as a tree
    - Implement the tree using recursion
    - Test it
2. Make it efficient
    - Add a memo object
    - Add a base case to return memo values
    - Store return values into the memo

---

## Tabulation Recipe

1. Visualize the problem as a table
2. Size the table based on the inputs
3. Initialize the table with default values
4. Seed the trivial answer into the table
5. Iterate through the table
6. Fill further positions based on the current position

---

## Problem: Fibonacci

Write a function ```fib(n)``` that takes in a number as an argument. The function should return the **_n-th_** number of the Fibonacci sequence.

**Note**:

- The 1st and 2nd number of the sequence is 1.
- To generate the next number of the sequence, we sum the previous two.

**Sequence**:

```n :     1, 2, 3, 4, 5, 6, 7, 8, 9, ...```

```fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...```

**Example:**

```fib(6)``` --> **8**

```fib(7)``` --> **13**

```fib(8)``` --> **21**

```fib(9)``` --> **34**

---

## Problem: Grid Traveler

Say that you are a traveler on a 2D grid. You begin in the ```top-left``` corner and your goal is to travel to the ```bottom-right``` corner.

*You can only move down or right.*

In how many ways can you travel to the goal on a grid with dimensions ```m * n```?

Write a function ```gridTraveler(m, n)``` that calculates this.

**Example:**

```gridTraveler(2, 3)``` --> **3**

```gridTraveler(3, 2)``` --> **3**

 ```gridTraveler(3, 3)``` --> **6**

 ```gridTraveler(18, 18)``` --> **2333606220**

 ---

## Problem: Can Sum

Write a function ```canSum(targetSum, numbers)``` that takes in a ```targetSum``` and ```an array of numbers``` as **arguments**.

The function should ```return a boolean``` indicating whether or not it is possible to **_generate the targetSum using numbers from the array_**.

- **You may use an element of the array as many times as needed.**

- **You may assume that all input numbers are non-negative.**

**Example:**

```canSum(7, [5, 3, 4, 7])``` --> **true**

```canSum(7, [2, 4])``` --> **false**

```canSum(8, [2, 3, 5])``` --> **true**

```canSum(300, [7, 14])``` --> **false**

---

## Problem: How Sum

Write a function ```howSum(targetSum, numbers)``` that takes in a ```targetSum``` and ```an array of numbers``` as **arguments**.

The function should ```return an array``` containing any combination of elements that add up to exactly the ```targetSum```. If there is no combination that adds up to the ```targetSum```, then return ```null```.

- **If there are multiple combinations possible, you may return any single one.**

- **You may use an element of the array as many times as needed.**

- **You may assume that all input numbers are non-negative.**

**Example:**

```howSum(7, [5, 3, 4, 7])``` --> **[3, 4]**

```howSum(7, [2, 4])``` --> **null**

```howSum(8, [2, 3, 5])``` --> **[2, 2, 2, 2]**

```howSum(300, [7, 14])``` --> **null**

---

## Problem: Best Sum

Write a function ```bestSum(targetSum, numbers)``` that takes in a ```targetSum``` and ```an array of numbers``` as **arguments**.

The function should ```return an array``` containing the **_shortest combination_** of numbers that add up to exactly the ```targetSum```. If there is a tie for the shortest combination, you may return any one of the shortest.

- **You may use an element of the array as many times as needed.**

- **You may assume that all input numbers are non-negative.**

**Example:**

```bestSum(7, [5, 3, 4, 7])``` --> **[7]**

```bestSum(8, [2, 3, 5])``` --> **[3, 5]**

```bestSum(8, [1, 4, 5])``` --> **[4, 4]**

```bestSum(100, [1, 2, 5, 25])``` --> **[25, 25, 25, 25]**

---

## Problem: Can Construct

Write a function ```canConstruct(target, wordBank)``` that accepts a ```target string``` and an array of ```strings```.

The function should ```return a boolean``` indicating whether or not the ```target``` can be constructed by concatenating elements of the ```wordBank``` array.

- **You may reuse elements of ```wordBank``` as many times as needed.**

**Example:**

```canConstruct(abcdef, [ab, abc, cd, def, abcd])``` --> **true**

```canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar])``` --> **false**

```canConstruct('', [cat, dog, mouse])``` --> **true**

```canConstruct('', [])``` --> **true**

---

## Problem: Count Construct

Write a function ```countConstruct(target, wordBank)``` that accepts a ```target string``` and an array of ```strings```.

The function should ```return the number of ways``` that the ```target``` can be constructed by concatenating elements of the ```wordBank``` array.

- **You may reuse elements of ```wordBank``` as many times as needed.**

**Example:**

```countConstruct(abcdef, [ab, abc, cd, def, abcd])``` --> **1**

```countConstruct(purple, [purp, p, ur, le, purpl])``` --> **2**

```countConstruct('', [cat, dog, mouse])``` --> **1**

```countConstruct('', [])``` --> **1**

---

## Problem: All Construct

Write a function ```allConstruct(target, wordBank)``` that accepts a ```target string``` and an array of ```strings```.

The function should ```return a 2D array``` containing **_all of the ways_** that the ```target``` can be constructed by concatenating elements of the ```wordBank``` array. Each element of the 2D array should represent one combination that constructs the ```target```.

- **You may reuse elements of ```wordBank``` as many times as needed.**

**Example:**

```allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])``` --> **[ [ab, cd, ef], [ab, c, def], [abc, def], [abcd, ef] ]**

```allConstruct(purple, [purp, p, ur, le, purpl])``` --> **[ [purp, le], [p, ur, p, le] ]**

```allConstruct('', [cat, dog, mouse])``` --> **[ [] ]**

```allConstruct('', [])``` --> **[ [] ]**
