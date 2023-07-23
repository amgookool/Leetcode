from typing import List


def rotate(nums: List[int], k: int) -> None:
    """ Do not return anything, modify nums in-place instead.
    """
    pass


if __name__ == '__main__':
    test_cases = {
        1: ([1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]),
        2: ([-1, -100, 3, 99], 2, [3, 99, -1, -100]),
    }

    test_case1 = test_cases[1]
    test_case2 = test_cases[2]
