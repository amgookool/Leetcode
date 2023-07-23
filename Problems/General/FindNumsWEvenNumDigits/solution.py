from typing import List

def findNumbers( nums: List[int]) -> int:
    return len([num for num in nums if len(str(num)) % 2 == 0])

if __name__ == '__main__':
    nums = [12,345,2,6,7896]
    print(findNumbers(nums))        