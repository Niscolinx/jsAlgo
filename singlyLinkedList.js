
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }

    pop() {
        let current = this.head
        let newTail = current
        if (!this.head) return undefined
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
            this.head = null
        }
        return newTail

    }

    shift() {
        let head = this.head
        if (!head) return undefined
        let newHead = this.head.next
        this.head = newHead
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return head
    }
    unShift(val) {
        let newNode = new Node(val)
        this.length++
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }
        else {
            let currentHead = this.head
            this.head = newNode
            this.head.next = currentHead
            return currentHead
        }
    }
    get(index) {
        if (index >= this.length || index < 0) return null
        let count = 0;
        let head = this.head
        while (count !== index) {
            count++
            head = head.next
        }
        return head
    }

    set(val, index) {
        let newNode = new Node(val)
        let idx = this.get(index)
        if (!idx) {
            return false
        }
        else {
            idx.val = newNode.val
            return true
        }
    }

    insert(val, index) {
        let newNode = new Node(val)
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unShift(val)
        else {
            let preNode = this.get(index - 1)
            let nextNode = preNode.next
            preNode.next = newNode
            newNode.next = nextNode
            this.length++
        }

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        index === 0 ? this.shift() : null
        index === this.length - 1 ? this.pop() : null
        let preNode = this.get(index - 1)
        let removeNode = preNode.next
        preNode.next = removeNode.next
        this.length--
        return removeNode

    }

    reverse(){
        let head = this.head
        this.head = this.tail
        this.tail = head
        let prev = null
        for(let i = 0; i < this.length; i++){
            let next = head.next
            head.next = prev;
            prev = head
            head = next
        }
        return this.print()
    }

    print(){
        let arr = []
        while(this.head){
            arr.push(this.head.val)
            this.head = this.head.next
        }
        console.log(arr)
    }
}

let list = new SinglyLinkedList()
list.push(3)
list.push(1)
list.push(9)

console.log(list.print())