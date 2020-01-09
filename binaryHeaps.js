class BinaryHeap{
    constructor(val){
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(val){
        this.values.push(val)
        this.bubbleUp()
        console.log(this.values)
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const child = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/ 2)
            let parent = this.values[parentIdx]
            if(child <= parent) break;
            this.values[parentIdx] = child
            this.values[idx] = parent
            idx = parentIdx
            
        }
    }
}

let heap = new BinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(43)

