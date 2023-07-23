from typing import List

def removeDuplicates(nums: List[int]) -> int:
    for val in nums:
        while nums.count(val) > 1:
            nums.remove(val)
    return len(nums)


if __name__ == '__main__':
    # nums = [1,1,2]
    nums = [0,0,1,1,1,2,2,3,3,4]
    size = removeDuplicates(nums)
    print(size)
    print(nums)