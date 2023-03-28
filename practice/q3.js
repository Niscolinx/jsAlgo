// Question 3
// Given an array, rotate the array to the right by k steps, where k is non-negative

//Constraints
//1. if arr = [] return []
//2. if k = 0, no rotation

//Solution

const givenArr = [1, 2, 3, 4]

const rotateArr = (arr, k) => {
    if (arr.length < 1) return []
    if (k === 0) return arr
    if (k > arr.length) return arr

    //should return [4,3,2,1] for k = 1
    //should return [3,4,1,2] for k = 2

    //create another array to hold the updated values
    let rotatedArr = []

    //slice through k steps, starting from the end

    const k_sliced = arr.slice(-k)
    const remaining_sliced = arr.slice(0, arr.length - k)


    //spread into the rotatedArr
    rotatedArr = [...k_sliced, ...remaining_sliced]

    return rotatedArr
}

console.log(rotateArr(givenArr, 1))
