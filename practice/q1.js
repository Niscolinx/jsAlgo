//Question
// You have given an array of integers in which each subsequent value is not less than the previous value. Write a function that takes the array as an input, and returns the square of each number sorted in ascending order



const givenArr = [3, -5, 2, 0, 3, 2, 7]
//const givenArr = [-4, -2, 0, 1, 3]

//First solution
// const updatedArr = givenArr
//     .map((item) => {
//         return Math.pow(item, 2)
//     })
//     .sort((a, b) => a - b)

// const squareArrAndSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (Math.abs(arr[j], 2) < Math.abs(arr[i], 2)) {
//                 const current = Math.abs(arr[j], 2)
//                 arr[j] = Math.abs(arr[i], 2)
//                 arr[i] = current
//             }
//         }

//         arr[i] = Math.pow(arr[i], 2)
//     }
//     return arr
// }
           

const squareArrAndSort = (arr) => {
    const updatedArr = [...arr]

    
    //Sort the arr
    const sortArr = (arr) => {
        arr.sort()

    }  //space = O(N)

    sortArr(updatedArr)
    
    //Make two pointers, one pointer to the first item and the other pointing to the last item of the  arr
    let leftIdx = 0
    let rightIdx = arr.length - 1


    for (let i = updatedArr.length - 1; i >= 0; i--) {
        //compare the square of the numbers
        //If the right value is greater, assign the value at the right index to the updated array
        //move the right idx down by removing one
        if (Math.pow(arr[leftIdx], 2) < Math.pow(arr[rightIdx], 2)) {
            updatedArr[i] = Math.pow(arr[rightIdx], 2)
            rightIdx = rightIdx - 1
        }
        //else assign the value at the left index to the updated array
        // move the left idx up by adding 1
        else {
            updatedArr[i] = Math.pow(arr[leftIdx], 2)
            leftIdx = leftIdx + 1
        }
    }  // time - O(N)

    return updatedArr
}

console.log(squareArrAndSort(givenArr))
