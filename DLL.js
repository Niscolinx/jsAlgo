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
        if (!this.head) return null
        else {
           // let newTail = this.tail.prev
            // this.tail = newTail
            // this.next = null
            // this.length--
          //  console.log('the new tail',newTail)
        }
       // return this
    }
}

let dList = new DoublyLinkedList()
dList.push(1)
dList.push(2)
dList.push(3)
//dList.pop()
console.log(dList)