// const givenArr = [3, 5, 7, 8, 9, 9, 12, 17]
const givenArr = [13, 34, 2, 0, 5, 9, 1, 5]

//First solution
// const updatedArr = givenArr
//     .map((item) => {
//         return Math.pow(item, 2)
//     })
//     .sort((a, b) => a - b)

const squareArrAndSort = (arr) => {
    const updatedArr = []

    for (let i = 0; i < arr.length; i++) {
        //if the arr is empty push the first number
        const item = arr[i]
        const square = Math.pow(item, 2)

        debugger
        if (updatedArr.length < 1) {
            updatedArr.push(square)
        }
        //check if the previous number in the arr is greater than arr[i]
        else if (updatedArr[i - 1] > square) {
            //If it's greater then, then swap
            const temp = updatedArr[i - 1]
            updatedArr[i - 1] = square
            updatedArr.push(square)
        } else {
            updatedArr.push(square)
        }
    }

    return updatedArr
}

console.log(squareArrAndSort(givenArr))
