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


    //Finds the smallest edge to N
    isSmaller(num) {
        for (let i in this.shortest) {
            if (!this.visited[i]) {
                if (this.shortest[i] === num) return i
            }
        }
    }

    findShortestPath(v1, v2) {

        let smallest = Infinity;
        
        //Loops over the list and stores the edges in objects
        for (let key in this.list) {
            this.prev[key] = null

            if (key === v1) {
                this.shortest[v1] = 0

                //Gets the starting edge so that the checkprev function can you it for its logic
                this.start = key
            }
            else {
                this.shortest[key] = Infinity
            }
        }

        //Gets the smallest vertex to n, which should be the first edge in the shortest object (since  moving from n to n is zero)
        for (let i in this.shortest) {
            if (this.shortest[i] < smallest) {
                smallest = this.shortest[i]
            }
        }
        for (let j in this.shortest) {
          
                let small = Infinity

                // generates a new edge to look into and find the paths linked to it
                let key = this.isSmaller(smallest)
                
                if (this.visited[key]) return null
                
            this.visited[key] = true
            
            let AllVisited = 0;
            for (let i = 0; i < this.list[key].length; i++) {
                
                //If the edge has not been visited, check it's corresponding vertices
                if (!this.visited[this.list[key][i].node]) {

                    newSum++
                    let sum = this.vertexPath(key, this.list[key][i].node)

                    //If  the previous sum of the vertices is not equal to the current sum(that means their paths are the same, so it's not shorter or longer),  added the shortest distance and update the previous path

                    if (this.shortest[this.list[key][i].node] !== sum) {

                        this.shortest[this.list[key][i].node] = sum
                        this.prev[this.list[key][i].node] = key
                    }

                }
            }

            //If every edge of the destination has been visited, that means the shortest path is now known

            if(AllVisited === 0){
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
    //Calculates the distance between two edges
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

            //When Checkprev is done, total takes the sum of all the vertices from point n to point m
            let total = 0
            for (let i = 0; i < arr.length; i++) {
                //distance is called as far as the path from point n to point m is not yet done
                total += this.distance(arr[i][0], arr[i][1])
            }
            return total
        }

        //Loops through the previous Edges to determine the path it took from point n to  point m and stores it in an array
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
D.findShortestPath('E', 'C')

