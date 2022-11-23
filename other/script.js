(() => {
    const same = (arr1, arr2) => {
        let freq1 = {}
        let freq2 = {}
        for (let key of arr1) {
            freq1[key] = (freq1[key] || 0) + 1
        }
        for (let key of arr2) {
            freq2[key] = (freq2[key] || 0) + 1
        }
        if (freq1.length !== freq2.length) return false
        for (let key in freq1) {
            if (!(key ** 2 in freq2)) return false

            if (freq1[key] !== freq2[key ** 2]) return false
        }

        return true

    }
    console.log(same([2, 4, 4], [16, 4, 17]))
})()

