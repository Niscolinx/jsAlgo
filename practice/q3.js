// Question 3
// Given an array, rotate the array to the right by k steps, where k is non-negative

//Constraints
//1. if arr = [] return []
//2. if k = 0, no rotation

//Solution

const givenArr = [1, 2, 3, 4, 5]

const rotateArr = (arr, k) => {
    if (arr.length < 1) return []
    if (k === 0) return arr
    if (k > arr.length) {
        k = k % arr.length
    }

    let rotatedArr = []

    //slice through k steps, starting from the end
    const k_sliced = arr.slice(-k)
    const remaining_sliced = arr.slice(0, arr.length - k)

    //spread into the rotatedArr
    rotatedArr = [...k_sliced, ...remaining_sliced]

    //rotatedArr = [k_sliced, remaining_sliced]

    //rotatedArr = k_sliced.concat(remaining_sliced)

    return rotatedArr
}

console.log(rotateArr(givenArr, 7))

//Solution 2

const rotateTheArray = (arr, k) => {
    if (arr.length < 1) return []
    if (k === 0) return arr
    if (k > arr.length) {
        k = k % arr.length
    }

    //loop through the array and reverse using es6 syntax
    const reverse = (numsArr, start, end) => {
        while (start < end) {
            ;[numsArr[start], numsArr[end]] = [numsArr[end], numsArr[start]]
            start++
            end--
        }

        return numsArr
    }

    const reversedArr = reverse(arr, 0, arr.length - 1)

    reverse(reversedArr, 0, k - 1)
    reverse(reversedArr, k, arr.length - 1)

    return arr
}

//console.log(rotateTheArray(givenArr, 6))
