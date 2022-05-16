// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

;(() => {
    function solution(N) {
        // write your code in JavaScript (Node.js 8.9.4)

        const result = (N >>> 0).toString(2)

        let count = 0
        for (let i = 0; i < result.length; i++) {
            if (result[i] === '1') {
                count++
            }
        }
        if (count < 2) return 0
        const checkForZero = result.includes('0')

        if (!checkForZero) return 0

        let beginCount = false
        let max_binary_gap = 1
        let countZeros = 0
        for (let i = 0; i < result.length; i++) {
            if (result[i] === '1') {
                countZeros = 0
                beginCount = true
            }

            if (beginCount && result[i] === '0') {
                countZeros++
            }

            if (countZeros > max_binary_gap) {
                max_binary_gap = countZeros
            }
        }

        return max_binary_gap
    }

    // console.log(solution(1045))

    //More Efficient solution

    function binaryGap(N) {
        const binaryNum = N.toString(2)
        let newArray = []
        let newOne = null
        let gap = null
        console.log({ binaryNum })
        for (let i = 0; i < binaryNum.length; i++) {
            if (newArray.indexOf(binaryNum.indexOf(1, i)) === -1) {
                newArray = [...newArray, binaryNum.indexOf(1, i)]
            }

        }

        for(let i = 0; i < newArray.length; i++){
            newOne = newArray[i]

            if(gap < newArray[i + 1] - (newOne + 1)){
                gap = newArray[i + 1] - (newOne + 1)
            }
        }

        if(gap === null) {
            return 0
        }
        else {
            return gap
        }

    }
    return binaryGap(1045)
})()
