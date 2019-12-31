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
                if (val < current.left) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    }
                    else {
                        current = current.left
                    }
                }

            }
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(20)
bst.insert(15)
