class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const treeNodeType = typeof new TreeNode();

const case1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
const case2 = new TreeNode(1, null, new TreeNode(2));
const case3 = new TreeNode(1, new TreeNode(2), null);
const case4 = new TreeNode();
const case5 = new TreeNode(1);

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        result.push(current.val);
        current = current.right;
    }
    return result;
}

console.log(inorderTraversal(case5));
