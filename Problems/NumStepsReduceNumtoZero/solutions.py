def numberOfSteps(num: int) -> int:
    """Function that counts the number of steps to reduce a number, num to 0

    Args:
        num (int): The number that has to be reduced to 0

    Returns:
        int: The number of steps it took to reduce num to 0
    """
    steps = 0
    while num != 0:
        if num % 2 == 0:  # Check if even
            num /= 2
            steps += 1
        else:
            num -= 1
            steps += 1
    return steps


num1 = 123

print(numberOfSteps(num1))
