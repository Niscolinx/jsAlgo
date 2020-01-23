class graph {
    constructor() {
        this.list = {}
        this.shortest = {}
        this.visited = {}
        this.prev = {}
    }

    addVertex(vertex) {
        if (!this.list[vertex]) this.list[vertex] = []
    }

    addEdge(v1, v2, weight) {
        if (!(this.list[v1] && this.list[v2])) return null
        this.list[v1].push({ node: v2, weight })
        this.list[v2].push({ node: v1, weight })

    }

    distance(x, y) {
        if (!(this.list[x] && this.list[y])) return null

        let z;
        for (let i in this.list[x]) {

            if (this.list[x][i].node === y) {
                z = this.list[x][i].weight
                return z
            }
        }
        
    }
    
    isSmaller(num) {
        for (let i in this.shortest) {
            if (!this.visited[i]) {
                if (this.shortest[i] === num) return i
            }
        }
    }
    
    findShortestPath(v1, v2) {
        let smallest = Infinity;
        
        for (let key in this.list) {
            this.prev[key] = null
            
            if (key === v1) {
                this.shortest[v1] = 0
            }
            else {
                this.shortest[key] = Infinity
            }
        }
        
        for (let i in this.shortest) {
            if (this.shortest[i] < smallest) {
                smallest = this.shortest[i]
            }
        }
        for (let j in this.shortest) {
            let small = Infinity
          
            let key = this.isSmaller(smallest)
            
            if (this.visited[key]) return null
            
            this.visited[key] = true

            let checkWeight = Infinity
            for (let i = 0; i < this.list[key].length; i++) {
                
                console.log(this.visited[this.list[key][i].node])
                if (!this.visited[this.list[key][i].node]) {

                    this.prev[this.list[key][i].node] = key
                    this.shortest[this.list[key][i].node] = this.distance(key, this.list[key][i].node) + this.distance(this.prev[key], key)

                    if (this.list[key][i].weight < checkWeight) {
                        checkWeight = this.distance(key, this.list[key][i].node) + this.distance(this.prev[key], key)
                    }

                }
            }

            for (let i in this.shortest) {
                if (!this.visited[i]) {

                    console.log(this.shortest[i], small)
                    if (this.shortest[i] < small && this.shortest[i] !== small) {

                        small = this.shortest[i]
                        smallest = small
                    }

                }
            }

        }
    }


}

let D = new graph()
D.addVertex('A')
D.addVertex('B')
D.addVertex('C')
D.addVertex('D')
D.addVertex('E')
D.addVertex('F')
D.addEdge('A', 'B', 4)
D.addEdge('A', 'C', 2)
D.addEdge('B', 'E', 3)
D.addEdge('C', 'D', 2)
D.addEdge('C', 'F', 4)
D.addEdge('D', 'E', 3)
D.addEdge('D', 'F', 1)
D.addEdge('F', 'E', 1)
D.findShortestPath('A', 'E')

