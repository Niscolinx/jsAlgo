class hashTable {
    constructor(size = 53) {
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
}



let hash = new hashTable()
