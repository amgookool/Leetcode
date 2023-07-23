# Module providing the Python Types for Declaring Types of variables
from typing import List

# Function for computing the Running Sum
# def runningSum(nums: List[int]) -> List[int]:
#     Sum_ : int = 0
#     runSum : List[int] = []
#     for i in range(len(nums)):
#         Sum_ += nums[i]
#         runSum.append(Sum_)
#     return runSum

# Function for computing the Running Sum
def runningSum(nums: List[int]) -> List[int]:
    x : int = 0
    for i in range(len(nums)):
        x += nums[i]
        nums[i] = x
    return nums

in_nums = [1,2,3,4]

ans = runningSum(in_nums)
print(ans)
