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
    const updatedArr = [...arr]
    for (let i = 0; i < arr.length - 1; i++) {
        //if the arr is empty push the first number
        const loopingItem = parseInt(arr[i])

        console.log({loopingItem})
        // const square = Math.pow(item, 2)

        // updatedArr.push(square)

        // for (let j = i + 1; j < updatedArr.length; j++) {
        //     // if compareItem is less than looping Item, then swap the items
        //     const compareItem = updatedArr[j]
        //     if(compareItem < loopingItem){

        //     }
        // }
    }
}

console.log(squareArrAndSort(givenArr))
