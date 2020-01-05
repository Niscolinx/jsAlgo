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
                else if(val > current.val){
                    if(!current.right){
                        current.right = newNode
                        return this
                    }
                    else{
                        current = current.right
                    }
                }

            }
        }
    }

    find(val) {
        if(!this.root){
            return false
        }
        else{
            if(val === this.root.val){
                return true
            }
            else{
                let current = this.root
                while(true){
                    if(val < current.val){
                        if(!current.left){
                            return false
                        }
                        else if(current.left.val === val){
                            return true
                        }
                        else{
                            current = current.left
                        }
                    }
                    if(val > current.val){
                        if(!current.right){
                            return false
                        }
                        else if (current.right.val === val) {
                            return true
                        }
                        else{
                            current = current.right
                        }
                    }
                }
            }
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(20)
bst.insert(15)
