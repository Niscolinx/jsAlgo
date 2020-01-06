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

    BFS() {
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
}


