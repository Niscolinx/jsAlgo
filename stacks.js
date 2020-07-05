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
        }
        else {
            let oldFirst = this.first
            this.first = newNode
            newNode.next = oldFirst
        }
        return ++this.size
    }

    pop() {
        let toDisplay;
        if (this.size === 0) {
            this.last = null
            this.first = null
            return null
        }
        if (this.first === this.last) {
            toDisplay = this.first
            this.first = null
            this.last = null
            this.size--
            return toDisplay.val
        }
        else {
            toDisplay = this.first
            this.first = toDisplay.next
            this.size--
            return toDisplay.val
        }

    }

    print() {
        let arr = [this.first.val]
        if (this.size === 1) {
            console.log(arr)
            return;
        }
        else {
            let item = this.first.next
            for (let i = 1; i < this.size; i++) {
                arr.push(item.val)
            }
            console.log(arr)
        }


    }
}
