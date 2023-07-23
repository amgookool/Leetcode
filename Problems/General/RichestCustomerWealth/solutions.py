'''Richest Customer Wealth/'''
from typing import List


def maximumWealth(accounts: List[List[int]]) -> int:
    """Function to find the highest wealth of the richest customer

    Args:
        accounts (List[List[int]]): a list containing all customer whose bank values are in a list

    Returns:
        int: The Highest total sum of the values between each customer
    """
    # Iterate over over accounts -> represents each (iteratable) customer
    # For each customer:
    # *-> iterate over all of their banks
    # Update the total sum for each value in their banks
    # return the total sum
    highest = 0
    for i in accounts:
        total = 0
        for j in i:
            total += j
        if total >= highest:
            highest = total
    return highest


accounts_input1 = [[1, 2, 3], [3, 2, 1]]

accounts_input2 = [[1, 5], [7, 3], [3, 5]]

accounts_input3 = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]

ANS = maximumWealth(accounts=accounts_input3)

print(ANS)
