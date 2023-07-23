from typing import List


def containsDuplicate(nums: List[int]) -> bool:
    # hashMap = {}
    # for num in nums:
    #     if num not in hashMap:
    #         hashMap[num] = 1
    #     else:
    #         hashMap[num] += 1
    # # Check if any value in the hashmap is greater than 1
    # return any(val > 1 for val in hashMap.values())

    if len(nums) == len(set(nums)):
        return False
    else:
        return True


if __name__ == '__main__':
    test_cases = {
        1: ([1, 2, 3, 1], True),
        2: ([1, 2, 3, 4], False),
        3: ([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], True)
    }
    case1 = test_cases.get(1)
    case2 = test_cases.get(2)
    case3 = test_cases.get(3)

    case1_result = containsDuplicate(case1[0])
    case2_result = containsDuplicate(case2[0])
    case3_result = containsDuplicate(case3[0])

    assert case1_result == case1[1], "Test case 1 failed"
    assert case2_result == case2[1], "Test case 2 failed"
    assert case3_result == case3[1], "Test case 3 failed"
