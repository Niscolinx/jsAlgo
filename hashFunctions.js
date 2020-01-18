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
        console.table(this.keyMap)
    }
}



let hash = new hashTable()
hash.set('salmon', 5)
