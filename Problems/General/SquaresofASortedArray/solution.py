from typing import List

def sortedSquares( nums: List[int]) -> List[int]:
    for i in range(len(nums)):
            nums[i] = nums[i] ** 2
    # sort nums in ascending order
    nums.sort()
    return nums

if __name__ == '__main__':
    nums = [-4,-1,0,3,10]
    print(sortedSquares(nums))        