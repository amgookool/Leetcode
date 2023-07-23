""" FizzBuzz Solution
"""
from typing import List


def fizzBuzz(n: int) -> List[str]:
    """Function for FizzBuzz Solution

    Args:
        n (int): The integer value that must be looped over

    Returns:
        List[str]: List of words or numbers as string
    """
    ans = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            ans.append("FizzBuzz")
        elif i % 3 == 0:
            ans.append("Fizz")
        elif i % 5 == 0:
            ans.append("Buzz")
        else:
            ans.append(str(i))
    return ans


print(fizzBuzz(3))

print(fizzBuzz(15))
