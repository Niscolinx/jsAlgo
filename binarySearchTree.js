class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }

        else {
            let current = this.root
            while (true) {
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    }
                    else {
                        current = current.left
                    }
                }
                else if (val > current.val) {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    }
                    else {
                        current = current.right
                    }
                }

            }
        }
    }

    find(val) {
        if (!this.root) {
            return false
        }
        else {
            if (val === this.root.val) {
                return true
            }
            else {
                let current = this.root
                while (true) {
                    if (val < current.val) {
                        if (!current.left) {
                            return false
                        }
                        else if (current.left.val === val) {
                            return current
                        }
                        else {
                            current = current.left
                        }
                    }
                    if (val > current.val) {
                        if (!current.right) {
                            return false
                        }
                        else if (current.right.val === val) {
                            return current
                        }
                        else {
                            current = current.right
                        }
                    }
                }
            }
        }
    }

    BST() {
        let arr = []
        let visited = []
        let root = this.root
        arr.push(root)
        while (arr.length) {
            root = arr.shift()
            visited.push(root.val)
            if (root.left) {
                arr.push(root.left)
            }
            if (root.right) {
                arr.push(root.right)
            }
        }
        return visited
    }

    DFS() {
        // let arr = [],
        //     visited = [],
        //      root = this.root
        // arr.push(root.val)

        //     while (root.left) {
        //         let node = root.left
        //         arr.push(node.val)
        //         if (node.left) {
        //             arr.push(node.left.val)
        //         }
        //         if (node.right) {
        //             arr.push(node.right.val)
        //         }
        //         break
        //     }

        //     while (root.right) {
        //         let node = root.right
        //         arr.push(node.val)
        //         if (node.left) {
        //             arr.push(node.left.val)
        //         }
        //         if (node.right) {
        //             arr.push(node.right.val)
        //         }
        //         break;
        //     }
        //     return arr;

        let visited = []

        function helper(node) {
            visited.push(node.val)

            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }

        helper(this.root)
        return visited

    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(20)
bst.insert(12)

bst.DFS()

