// const givenArr = [3, 5, 7, 8, 9, 9, 12, 17]
const givenArr = [13, 34, 2, 0, 5, 9, 1, 5]

//First solution
// const updatedArr = givenArr
//     .map((item) => {
//         return Math.pow(item, 2)
//     })
//     .sort((a, b) => a - b)

const arr1 = [5, 3, -1, 4, 2, 0]
const squareArrAndSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {

         
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[j], 2) < Math.abs(arr[i], 2)) {
                const current = Math.abs(arr[j], 2)

                arr[j] = Math.abs(arr[i], 2)
                arr[i] = current
            }
        }
    }
    return arr
}

console.log(squareArrAndSort(arr1))
