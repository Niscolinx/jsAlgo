class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.last) {
            this.first = newNode
            this.last = newNode
        }
        this.last.next = newNode
        this.last = newNode
        return ++this.size
    }

    dequeue() {
        if (!this.size) return null
        if (this.first === this.last) {
            this.last = null
        }
        let currentFirst = this.first
        this.first = currentFirst.next
        this.size--
        return currentFirst.val
    }
}

let q = new Queue()
