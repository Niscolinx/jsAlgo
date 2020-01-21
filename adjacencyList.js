class graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            return `${vertex} already exists`
        }
        else {
            this.adjacencyList[vertex] = []
        }

        return this.adjacencyList
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)

        return this.adjacencyList
    }

    removeEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){

            for (let i = 0; i < this.adjacencyList[v1].length; i++) {
                if (this.adjacencyList[v1][i] === v2) {
                  this.adjacencyList[v1].splice(i, 1)
                }
            }
            for (let i = 0; i < this.adjacencyList[v2].length; i++) {
                if (this.adjacencyList[v2][i] === v1) {
                    this.adjacencyList[v2].splice(i,1)
                }
            }

            return this.adjacencyList
        }
        return `${v1} or ${v2} does not exist in the adjacency list`
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return null
        else{
            let count = this.adjacencyList[vertex].length
            for(let i = count - 1; i >= 0; i--){
                this.removeEdge(this.adjacencyList[vertex][i], vertex)
                
            }
            delete this.adjacencyList[vertex]
            return this.adjacencyList
        }
    }
}

let l = new graph()
l.addVertex('Tokyo')
l.addVertex('Denver')
l.addVertex('Berlin')
l.addVertex('Rio')
l.addVertex('Nairobi')
l.addEdge('Denver', 'Tokyo')
l.addEdge('Berlin', 'Tokyo')
l.addEdge('Berlin', 'Denver')
l.addEdge('Berlin', 'Rio')
l.removeEdge('Berlin', 'Tokyo')
l.removeVertex('Berlin')
