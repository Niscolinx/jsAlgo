class graph {
    constructor() {
        this.list = {}
        this.shortest = {}
        this.visited = {}
        this.prev = {}
        this.start = null
    }

    addVertex(vertex) {
        if (!this.list[vertex]) this.list[vertex] = []
    }

    addEdge(v1, v2, weight) {
        if (!(this.list[v1] && this.list[v2])) return null
        this.list[v1].push({ node: v2, weight })
        this.list[v2].push({ node: v1, weight })

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
                this.start = key
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
            // if (this.visited[v2]) {
                //     console.log(this.prev[v2])
                //     return this.prev[v2]
                // }
                let small = Infinity
                
                let key = this.isSmaller(smallest)
                
                if (this.visited[key]) return null
                
            this.visited[key] = true
            
            let checkWeight = Infinity
            let newSum = 0;
            for (let i = 0; i < this.list[key].length; i++) {
                
                if (!this.visited[this.list[key][i].node]) {

                    newSum++
                    let sum = this.vertexPath(key, this.list[key][i].node)
                    
                    if (this.shortest[this.list[key][i].node] !== sum) {

                        this.shortest[this.list[key][i].node] = sum
                        this.prev[this.list[key][i].node] = key
                    }

                }
            }

            console.log(newSum)
            if(newSum === 0){
                 console.log('the shortest path is', this.prev[v2])
                 return this.prev[v2]
                
            }

            for (let i in this.shortest) {
                if (!this.visited[i]) {

                    if (this.shortest[i] < small && this.shortest[i] !== small) {

                        small = this.shortest[i]
                        smallest = small
                    }

                }
            }

        }
    }

    distance(x, y) {

        if (!y) return 0
        let z;
        for (let i in this.list[x]) {

            if (this.list[x][i].node === y) {
                z = this.list[x][i].weight
                return z
            }
        }

    }

    vertexPath(x, y) {
        let arr = []
        let prev = this.prev
        let start = this.start

        if (!this.prev[x]) {

            return this.distance(x, y)
        }
        else {

            arr.push([x, y])
            checkPrev(x)

            let total = 0
            for (let i = 0; i < arr.length; i++) {
                total += this.distance(arr[i][0], arr[i][1])
            }
            return total
        }

        function checkPrev(edge) {
            let key = start

            while (key) {

                for (key in prev) {

                    if (key === edge) {
                        arr.push([key, prev[key]])
                        edge = prev[key]
                        key = start
                        break
                    }
                    if (!edge) return

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

