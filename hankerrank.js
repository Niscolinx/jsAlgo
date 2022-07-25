(() => {
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
        }

        console.log('hello\nworld')
    }

    staircase(4)
})()
