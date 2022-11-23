class hashTable {
    constructor(size = 17) {
        this.keyMap = Array.from({ length: size }, () => [])
    }
    _hash = (str) => {
        let total = 0;
        let primeNum = 31;
        for (let i = 0; i < Math.min(str.length, 100); i++) {
            let val = str[i].charCodeAt(0) - 96
            total = (total * primeNum + val) % this.keyMap.length
        }
        return total
    }

    set = (key, val) => {
        let num = this._hash(key)
        if (this.keyMap[num]) {
            this.keyMap[num].push([key, val])
        }
        else {
            this.keyMap.push([key, val]);
        }
        return this.keyMap
    }

    get = (key) => {
        let num = this._hash(key)
        if (this.keyMap[num].length <= 0) return undefined
        else {
            for (let i = 0; i < this.keyMap[num].length; i++) {

                if (key === this.keyMap[num][i][0]) {
                    return this.keyMap[num][i]
                }
            }
            
            return undefined
        }
    }

    values = () => {
        let values = []
        let tempVal;
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i].length > 0){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    tempVal = this.keyMap[i][j][1]
                    values.push(tempVal)
                    
                }
            }
        }

        let newArr = [...new Set(values)]

        return newArr;
    }
    keys = () => {
        let values = []
        let tempVal;
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i].length > 0){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    tempVal = this.keyMap[i][j][0]
                    values.push(tempVal)

                }
            }
        }

        let newArr = [...new Set(values)]

        return newArr;
    }
}



let hash = new hashTable()
hash.set('yellow', 'jhsfzn')
hash.set('yelow', 'sfzn')
hash.set('yow', 'gsfzn')
hash.set('llow', 'isfzg')
hash.set('llow', 'isfzg')
hash.values()
hash.keys()
