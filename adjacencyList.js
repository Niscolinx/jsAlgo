class graph {
    constructor() {
        this.adjacencyList = {}
        this.store = []
        this.visited = {}
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
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {

            for (let i = 0; i < this.adjacencyList[v1].length; i++) {
                if (this.adjacencyList[v1][i] === v2) {
                    this.adjacencyList[v1].splice(i, 1)
                }
            }
            for (let i = 0; i < this.adjacencyList[v2].length; i++) {
                if (this.adjacencyList[v2][i] === v1) {
                    this.adjacencyList[v2].splice(i, 1)
                }
            }

            return this.adjacencyList
        }
        return `${v1} or ${v2} does not exist in the adjacency list`
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return null
        else {
            let count = this.adjacencyList[vertex].length
            for (let i = count - 1; i >= 0; i--) {
                this.removeEdge(this.adjacencyList[vertex][i], vertex)

            }
            delete this.adjacencyList[vertex]
            return this.adjacencyList
        }
    }

    DFTRecursive(vertex) {

        if (!this.adjacencyList[vertex]) return null

        if (this.adjacencyList[vertex].length === 0) return null

        this.store.push(vertex)
        this.visited[vertex] = true

        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {

            if (!Object.keys(this.visited).includes(this.adjacencyList[vertex][i])) {
                this.DFTRecursive(this.adjacencyList[vertex][i])
            }
        }

        return this.store

    }

    DFTIterative(vertex) {

        if (!this.adjacencyList[vertex]) return null

        let stack = []
        let discovered = {}
        let result = []
        stack.push(vertex)

        while (stack.length > 0) {
            vertex = stack.pop()

            if (!discovered[vertex]) {
                result.push(vertex)
                discovered[vertex] = true
                this.adjacencyList[vertex].forEach(element => {
                    stack.push(element)
                });
            }
        }

        return result
    }
    BFT(vertex) {
        
        if (!this.adjacencyList[vertex]) return null
        
        if (this.adjacencyList[vertex].length === 0) return null
        
        let result = []
        let visit = {}
        
        let list = this.adjacencyList
        result.push(vertex)
        
        function helper(node){
            
            visit[node] = true 
            
            for (let i = 0; i < list[node].length; i++) {
                    if(!visit[list[node][i]]){
                        if(!result.includes(list[node][i])){
                            result.push(list[node][i])
                        }
                    }
                }
                for (let i = 0; i < list[node].length; i++) {
                    if(!visit[list[node][i]]){
                        helper(list[node][i])
                    }
                }
            
            
            return result
        }
     helper(vertex)
        
    }
}

let l = new graph()
l.addVertex('A')
l.addVertex('B')
l.addVertex('C')
l.addVertex('D')
l.addVertex('E')
l.addVertex('F')

l.addEdge('A', 'B')
l.addEdge('A', 'C')
l.addEdge('B', 'D')
l.addEdge('C', 'E')
l.addEdge('D', 'E')
l.addEdge('D', 'F')
l.addEdge('E', 'F')
l.BFT('A')
