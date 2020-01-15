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
        
        while(idx > 0){
            let child = this.list[idx]
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.list[parentIdx]
            if(child.priority >= parent.priority) break;
            this.list[parentIdx] = child
            this.list[idx] = parent
            idx = parentIdx

        }
    }
}

let p = new priorityQueue()
p.enqueue('hd', 3)
p.enqueue('he', 8)
p.enqueue('he', 2)
p.enqueue('he', 1)
p.enqueue('he', 4)
p.enqueue('he', 0)