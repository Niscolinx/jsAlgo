
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
            return newTail.val

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

        insert(val, index){
            let newNode = new Node(val)
            if(index < 0 || index > this.length) return false
            if(index === this.length) return this.push(val)
            if(index === 0) return this.unShift(val)
            else{
                let preNode = this.get(index - 1)
                let nextNode = preNode.next
                preNode.next = newNode
                newNode.next = nextNode
                this.length++
            }
            
        }
    }

    let list = new SinglyLinkedList()

    list.push('hello')
    list.push('world')
    list.push('The')
    list.push('Lord\'s')
    list.push('good')
    list.push('74')
    list.insert('yeah', 1)
    // list.pop()
    // list.pop()
    // list.pop()
    //console.log(list.get(2))
    return list

