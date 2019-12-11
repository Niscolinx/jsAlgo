class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
            this.last.next = null
        }
        else {
            let oldLast = this.last
            oldLast.next = newNode
            this.last = newNode
            this.last.next = null
        }
        this.size++
        return this.size
    }

    pop() {
        if (this.size === 0) return undefined
        if (this.size === 1) {
            this.last.next = null
        }
        else {
            let toRemove = this.last
            toRemove = null
        }
        this.size--
        return this.size
    }

    print() {
        let arr = [this.first]
        let first = this.first.next
        for (let i = 0; i < this.size; i++) {
            arr.push(first.val)
        }
    }
}