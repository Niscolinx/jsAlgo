// const givenArr = [3, 5, 7, 8, 9, 9, 12, 17]
const givenArr = [13, 34, 2, 0, 5, 9, 1, 5]

//First solution
// const updatedArr = givenArr
//     .map((item) => {
//         return Math.pow(item, 2)
//     })
//     .sort((a, b) => a - b)

const squareArrAndSort = (arr) => {
    const updatedArr = [...arr]
    const sortedArr = []
    for (let i = 0; i < arr.length; i++) {
        //if the arr is empty push the first number
        const item = arr[i]
        const square = Math.pow(item, 2)

        updatedArr.push(square)
    }

    for (let i = 0; i < updatedArr.length; i++) {

    }
}

console.log(squareArrAndSort(givenArr))
