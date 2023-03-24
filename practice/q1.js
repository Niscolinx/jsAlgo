// const givenArr = [3, 5, 7, 8, 9, 9, 12, 17]
const givenArr = [13, 34, 2, 0, 5, 9, 1, 5]

//First solution
// const updatedArr = givenArr
//     .map((item) => {
//         return Math.pow(item, 2)
//     })
//     .sort((a, b) => a - b)

const squareArrAndSort = (arr) => {
    // loop through the arr and square each item
    const updatedArr = []

    for (let i = 0; i < arr.length; i++) {
        const square = Math.pow(item, 2)
        
        if (updatedArr.length < 1) {
            updatedArr.push(square)
        }
        const item = arr[i]

        updatedArr.push(square)
    }

    return updatedArr
}

console.log(squareArrAndSort(givenArr))
