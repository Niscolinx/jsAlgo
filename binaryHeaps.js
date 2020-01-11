class BinaryHeap {
    constructor(val) {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()

    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const child = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (child <= parent) break;
            this.values[parentIdx] = child
            this.values[idx] = parent
            idx = parentIdx

        }
    }

    extractMax() {
        const max = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()

        }
        return max
    }

    sinkDown() {
        let idx = 0,
            length = this.values.length,
            element = this.values[0]

        while (true) {
            let leftChildIdx = 2 * idx + 1,
                rightChildIdx = 2 * idx + 2,
                leftChild, rightChild,
                swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                leftChild > element ? swap = leftChild : null
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > element)
                    ||
                    (swap !== null && rightChild > leftChild)
                ) { swap = rightChildIdx }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }

    }

}

let heap = new BinaryHeap()
heap.insert(55)

heap.extractMax()


