"""
Binary Tree Inorder Traversal

Given the `root` of a binary tree, return the _inorder traversal of its nodes' values_

https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg

Example 1:

INPUT: root = [1, null,2,3]
OUTPUT: [1,2,3]

Example 2:

INPUT: root = []
OUTPUT: []

Example 3:

INPUT: root = [1]
OUTPUT: [1]

Constrains:
- The number of nodes in the tree is in the range [0, 100]
- -100 <= Node.val <= 100
"""

from typing import List, Optional


class TreeNode:
    """Node of a binary tree"""

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


case1 = TreeNode(1, None, TreeNode(2, TreeNode(3)))
case2 = TreeNode()
case3 = TreeNode(1)


def inorder_traversal(root: Optional[TreeNode]) -> List[int]:
    """Return the inorder traversal of the binary tree"""

    def helper(root: Optional[TreeNode], res: List[int]) -> List[int]:
        if root is not None:
            helper(root.left, res)
            res.append(root.val)
            helper(root.right, res)

    res = []
    helper(root, res)
    return res


result = inorder_traversal(case2)

print(result)
