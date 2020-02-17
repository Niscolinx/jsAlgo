class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        }
        else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node

        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            let oldTail = this.tail
            this.tail = oldTail.prev
            this.tail.next = null

        }

        this.length--
        return this
    }

    unShift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            let oldHead = this.head
            this.head.prev = node
            this.head = node
            node.next = oldHead
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let oldHead;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            oldHead = this.head
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null

        }
        this.length--
        return oldHead
    }

    get(index) {
        console.log('first test')
        if (index >= this.length || index < 0) return null
        let count = 0;
        let secondCount = this.length
        let tailStart = secondCount - index
        let head = this.head
        let tail = this.tail
        let middle = Math.floor(this.length / 2)
        if (index > middle) {
            while (count !== tailStart) {
                tail = tail.prev
                count++
            }
            return tail.next
        }
        else {
            while (count !== index) {
                head = head.next
                count++
            }
            return head
        }

    }

    insert(val, index) {
        let node = new Node(val)
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.unShift(val)
        if (index === this.length - 1) return this.push(val)
        else {
            let toInsert = this.get(index - 1)
            let oldNode = toInsert.next
            toInsert.next = node
            node.prev = toInsert
            oldNode.prev = node
            node.next = oldNode
            this.length++
        }
        return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        else {
            let toRemove = this.get(index - 1)
            let toConnect = toRemove.next
            let newInsert = toConnect.next
            toRemove.next = newInsert
            newInsert.prev = toRemove
            this.length--
        }
        return this
    }

    reverse() {
        let head = this.head
        this.head = this.tail
        this.tail = head
        let prev = null
        for (let i = 0; i < this.length; i++) {
            let next = head.next
            head.next = prev;
            prev = head
            head = next
        }
        return this.print()

        return this
    }
    print() {
        let head = this.head
        let arr = [head.val]
        for (let i = 0; i < this.length - 1; i++) {
            head = head.next
            arr.push(head.val)
        }
        console.log(arr)
    }
}

let list = new DoublyLinkedList()
list.push('hey')
list.push('hi')
list.push('hello')
list.push('world')

