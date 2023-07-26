# Sorting Algorithms

A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. 

The comparison operator is used to decide the new order of elements in the respective data structure.

For Example: The below list of characters is sorted in increasing order of their ASCII values. 

That is, the character with a lesser ASCII value will be placed first than the character with a higher ASCII value.

![Example](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230502172503/Sorting1.png)

## Bubble Sort

### Definition

Bubble sort is the simplest sorting algorithm that works be repeatedly swapping the adjacent elements if they are in the wrong order. 

This algorithm is not suitable for large datasets as its average and worst-case time complexity is quite high. 

In this algorithm:
- Traverse from left and compare the adjacent elements and the higher one is placed at right side. 

- In this way, the largest element is moved to the rightmost end at first.

- This process is then continued to find the second largest and place it and so on until the data is sorted.


### Complexity Analysis of Selection Sort

**Time Complexity**: $O(N^2)$

**Space Complexity**: $O(1)$

### Advantages of Selection Sort

- Bubble sort is easy to understand and implement. 

- It does not require any additional memory space.

- It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.

### Disadvantages of Selection Sort

- Bubble sort has a time complexity of $O(N^2)$ which makes it very slow for large datasets.

- Bubble sort is a comparison-based sorting algorithm \, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases. 


## Selection Sort

### Definition

**Selection Sort** is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it the sorted portion of the list. 

The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. 

This process is repeated for the remaining unsorted portion until the entire list is sorted.

### Complexity Analysis

**Time Complexity**: $O(n^2)$

This is because there a two nested loops:
     - One loop to select an element of the Array one by one = O(n) 
     - Another loop to compare that element with every other Array element = O(n)
- Hence, overall Time Complexity:

$$BigO = O(N) \times O(N) = O(N \times N) = O(N^2)$$

**Space Complexity**: $O(1)$

This is because the only extra memory used is for temporary variables while swapping two values in Array.

The selection sort never makes more than $O(N)$ swaps and can be useful when memory writing is costly. 

### Advantages of Selection Sort

- Simple and Easy to understand
- Works well with Small Datasets

### Disadvantages of Selection Sort

- Selection sort has a time complexity of $O(n^2)$ in the worst and average case.
- Does not work well on large datasets.
- Does not preserve the relative order of items with equal keys, which means it is not stable.


## Merge Sort

### Definition

### Complexity Analysis of Merge Sort

### Advantages of Merge Sort

### Disadvantages of Merge Sort

## Quick Sort

## Heap Sort

## Insertion Sort



## Table of Complexity Comparison

| Name           | Best Case | Average Case | Worst Case | Memory | Stable | Method Used  |
| -------------- | --------- | ------------ | ---------- | ------ | ------ | ------------ |
| Quick Sort     | $nlogn$   | $nlogn$      | $n^2$      | $logn$ | NO     | Partitioning |
| Merge Sort     | $nlogn$   | $nlogn$      | $nlogn$    | $n$    | YES    | Merging      |
| Heap Sort      | $nlogn$   | $nlogn$      | $nlogn$    | $O(1)$ | NO     | Selection    |
| Insertion Sort | $n$       | $n^2$        | $n^2$      | $O(1)$ | YES    | Insertion    |
| Bubble Sort    | $n$       | $n^2$        | $n^2$      | $o(1)$ | YES    | Swapping     |
| Selection Sort | $n^2$     | $n^2$        | $n^2$      | $O(1)$ | NO     | Selection    |


