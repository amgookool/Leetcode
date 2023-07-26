# Searching Algorithms

## Linear Search

Linear Search is defined as a **sequential** search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

### How does Linear Search work?

In Linear Search Algorithm:

- Every element is considered as a potential match for the key and checked for the same.

- If any element is found equal to the key, the search is successful and the index of that element is returned.

- If no element is found equal to the key, the search yields “No match found”.

### Complexity Analysis

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Advantages & Disadvantages

#### Advantages

- Linear Search can be used for irrespective of whether the list is sorted or not. It can be used on arrays of any data type.

- Does not require any additional memory.

- Well suited for small data sets.

#### Disadvantages

- Linear Search is not suitable for large data sets as its average and worst case complexity are of Ο(n) where n is the number of items.

### When to use Linear Search?

- When we are dealing with a small dataset.

- hen you are searching for a dataset stored in contiguous memory locations.

## Binary Search

Binary Search is defined as a searching algorithm used in a **sorted array** by repeatedly _dividing the search interval in half_.

The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

### How does Binary Search work?

In this algorithm:

- Divide the search space into two halves by finding the middle index “mid”.

- Compare the middle element of the search space with the key.

- If the key is found at middle element, the process is terminated.

- If the key is not found at middle element, choose which half will be used as the next search space.

  - If the key is smaller than the middle element, then the next search space will be the lower half.

  - If the key is greater than the middle element, then the next search space will be the upper half.

- Repeat until the key is found or the search space is empty.

### When to use Binary Search?

To apply Binary Search:

- The array should be sorted. If the array is not sorted, we can sort it using sorting techniques such as **Merge Sort** or **Quick Sort**.

- Access to any element in the array should be allowed in O(1) time. This can be done by using an array data structure.
