from typing import List

def findMaxConsecutiveOnes(nums: List[int]) -> int:
    max_count = 0
    count = 0
    for num in nums:
        if num == 1:
            count += 1
        else:
            max_count = max(max_count, count)
            count = 0
    max_count = max(max_count, count)
    return max_count
        

if __name__ == "__main__":
    nums = [1,1,0,1,1,1]
    out = findMaxConsecutiveOnes(nums=nums)
    print(out)