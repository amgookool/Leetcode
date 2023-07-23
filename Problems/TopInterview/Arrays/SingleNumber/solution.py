from typing import List


def singleNumber(nums: List[int]) -> int:
    Counts = {}
    for num in nums:
        if num not in Counts:
            Counts[num] = 1
        else:
            Counts[num] += 1
    for key, value in Counts.items():
        if value == 1:
            return key


if __name__ == '__main__':
    test_cases = {
        1: ([2, 2, 1], 1),
        2: ([4, 1, 2, 1, 2], 4),
        3: ([1], 1)
    }
    case1 = test_cases.get(1)
    case2 = test_cases.get(2)
    case3 = test_cases.get(3)
    out = singleNumber(case1[0])
    print(out)
