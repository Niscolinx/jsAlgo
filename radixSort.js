(() => {
    function getDigit(num, place) {
        // let newNum = num.toString()
        // let count = newNum.length - 1 - place
        // let store = 0

        // for (let i = newNum.length; i >= count; i--) {
        //     store = i
        //}
        //Another method
        let size = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
        return size
        // return newNum[store]
    }

    getDigit(876903, 2)

    function getCount(num) {
        //let newNum = num.toString()

        //Another method
        if(num === 0) return 1
        num = Math.floor(Math.log10(Math.abs(num))) + 1
        return num
       // return newNum.length
    }

    getCount(3455)

    function LoopDigits(num) {
        let max = 0
        for (let i = 0; i < num.length; i++) {
            max = Math.max(max, getCount(Math.abs(num[i])))
        }
        return max
    }

    //My solution
    // function radixSort(arr) {
    //     let loop = LoopDigits(arr)
    //     let start = 0;
    //     let keeper = arr.length
    //     let tempVar = []
    //     for (let i = 0; i < loop; i++) {
    //         let temp = []
    //         var giantArr = [[], [], [], [], [], [], [], [], [], []]
    //         for (let i = 0; tempVar = arr, i < tempVar.length; i++) {
    //             let digits = getDigit(tempVar[i], start)
    //             giantArr[digits].push(tempVar[i])
    //         }
    //         start++
    //         temp.push(giantArr)
    //         keeper = temp.flat(Infinity)
    //         arr = keeper;
    //     }
       
    //     console.log(tempVar)
    //     return tempVar
    // }
    function radixSort(arr) {
    let loop = LoopDigits(arr)
    for (let i = 0; i < loop; i++) {
        let giantArr = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            let digits = getDigit(arr[j], i)
            giantArr[digits].push(arr[j])
        }
        arr = [].concat(...giantArr)
    }
    console.log(arr)
    return arr
}



    return radixSort([1,54, 3,567, 8,434,6563,0,4,864,3,-5,788,2,11])

})();