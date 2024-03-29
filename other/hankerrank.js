;(() => {
    //Given a square matrix, calculate the absolute difference between the sums of its diagonals.
    function diagonalDifference(arr) {
        // Write your code here
        let leftToRight = 0
        let rightToLeft = 0
        for (let i = 0; i < arr.length; i++) {
            leftToRight += arr[i][i]
            rightToLeft += arr[i][arr.length - 1 - i]
        }
        return Math.abs(leftToRight - rightToLeft)
    }

    //console.log(diagonalDifference([[3,7,1,5],[2,8,9,4],[1,5,9,7],[4,6,7,2]]))

    //******************* */ */
    //Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

    //Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

    function plusMinus(arr) {
        // Write your code here
        let positive = 0
        let negative = 0
        let zero = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positive++
            } else if (arr[i] < 0) {
                negative++
            } else {
                zero++
            }
        }
        console.log((positive / arr.length).toFixed(6))
        console.log((negative / arr.length).toFixed(6))
        console.log((zero / arr.length).toFixed(6))
    }
    //************** */
    //You are given N disks and two rods, each with one initial disk.On the left rod, disks can be placed in decreasing order of size (smaller disks on top of bigger ones). On the right rod, disks can be placed in increasing order of size (bigger disks on top of smaller ones). Note that it is not permissible to place two disks of equal size on top of each other. The initial disks cannot be moved.

    //Examples:
    //1. Given A = [2, 3, 3, 4], L = 3 and R = 1, your function should return 3, since only three disks can be placed on the rods. Note that the disk of size 2 can be placed on either the left rod or the right rod.
    function solution(A, L, R) {
        //// write your code in JavaScript (Node.js 8.9.4)
    }

    //******************** */
    //Staircase detail
    //This is a staircase of size n = 4

    //Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

    //Write a program that prints a staircase of size n

    function staircase(n) {
        // Write your code here

        for (let i = 0; i < n; i++) {
            let str = ''
            for (let j = 0; j < n; j++) {
                if (j < n - i - 1) {
                    str += ''
                } else {
                    str += '#'
                }
            }
            console.log(str)
        }
    }

    //staircase(4)

    //******************** */
    //Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    function miniMaxSum(arr) {
        // Write your code here

        let add = 0
        const store = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i !== j) {
                    add += arr[j]
                }
            }

            store.push(add)
            add = 0
        }

        const min = Math.min(...store)
        const max = Math.max(...store)

        console.log(min + ' ' + max)
    }

    // miniMaxSum([1, 2, 3, 4, 5])

    //You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

    function birthdayCakeCandles(candles) {
        // Write your code here

        let count = []

        const sorted = candles.sort((a, b) => b - a)

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[0]) {
                count.push(sorted[i])
            } else {
                break
            }
        }

        return count.length
    }

    // birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36])

    //Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    //Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    function timeConversion(s) {
        // Write your code here
        const split = s.split('M').join('').split(':')

        const timeFormat = split[split.length - 1]

        if (timeFormat.includes('A')) {
           
            console.log(split[0])
            if(split[0] === '12'){
                split[0] = '00'
                
            }
        } else {
             if (split[0] !== '12') {
                 split[0] = (Number(split[0]) + 12).toString()
             }
        }

         const removedFormat = timeFormat.slice(0, 2)
         const militaryTime = split.splice(0, 2).concat(removedFormat).join(':')

        return militaryTime
    }

    timeConversion('08:01:00AM')
})()
