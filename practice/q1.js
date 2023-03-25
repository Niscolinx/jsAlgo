// const givenArr = [3, 5, 7, 8, 9, 9, 12, 17]
const givenArr = [5, 3, -1, 4, 2, 0]

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

    if (arr.length < 1) {
        return arr
    }
    //loop through the arr
    //Make two pointers, one pointer to the first item and the other pointing to the last item of the  arr
    let leftPointer = arr[0]
    let rightPointer = arr[arr.length - 1]

    for (let i = 0; i < arr.length; i++) {
        //compare between the two pointers and move the greater one to the end of the updated arr

        const greatest = Math.max(leftPointer, rightPointer)
    }
}

console.log(squareArrAndSort(givenArr))
