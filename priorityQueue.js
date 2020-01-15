class node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class priorityQueue {
    constructor() {
        this.list = []
    }

    enqueue(val, priority) {
        let newNode = new node(val, priority)

        this.list.push(newNode)
        if (this.list.length > 0) {
            this.bubbleUp()
        }
    }
    bubbleUp() {
        let idx = this.list.length - 1

        while (idx > 0) {
            let child = this.list[idx]
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.list[parentIdx]
            if (child.priority >= parent.priority) break;
            this.list[parentIdx] = child
            this.list[idx] = parent
            idx = parentIdx

        }
    }


    dequeue() {
        const max = this.list[0]
        let end = this.list.pop()
        if (this.list.length > 0) {
            this.list[0] = end
            this.sinkDown()

        }
        console.log(this.list)
    }

    sinkDown() {
        let idx = 0,
            length = this.list.length,
            element = this.list[0]

        while (true) {
            let leftChildIdx = 2 * idx + 1,
                rightChildIdx = 2 * idx + 2,
                leftChild, rightChild,
                swap = null

            if (leftChildIdx < length) {
                leftChild = this.list[leftChildIdx]
                leftChild.priority < element.priority ? swap = leftChild : null
            }
            if (rightChildIdx < length) {
                rightChild = this.list[rightChildIdx]
                if (
                    (swap === null && rightChild.priority < element.priority)
                    ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) { swap = rightChildIdx }
            }

            if (swap === null) break;
            this.list[idx] = this.list[swap]
            this.list[swap] = element
            idx = swap
        }

    }

}
let p = new priorityQueue()
p.enqueue('hd', 3)
p.enqueue('he', 14)
p.enqueue('he', 6)
p.enqueue('he', 2)
p.enqueue('he', 9)
p.enqueue('he', 0)
p.dequeue()
p.enqueue('hd', 5)
p.enqueue('uhd', 1)
p.dequeue()
