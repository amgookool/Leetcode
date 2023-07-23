from typing import List


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    for val in nums2:
        nums1[m+n-1] = val
        n -= 1
    nums1.sort()


if __name__ == '__main__':
    nums1, m = [1, 2, 3, 0, 0, 0], 3
    nums2, n = [2, 5, 6], 3

    # nums1, m = [1], 1
    # nums2, n = [], 0

    # nums1, m = [0], 0
    # nums2, n = [1], 1

    merge(nums1, m, nums2, n)
    print(nums1)
