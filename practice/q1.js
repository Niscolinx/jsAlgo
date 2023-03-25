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
    //loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        const loopingItem = Math.pow(arr[i], 2)

        for (let j = i + 1; j < arr.length; j++) {
            // if compareItem is less than looping Item, then swap the items
            const compareItem = Math.pow(arr[j], 2)
            if (compareItem < loopingItem) {
                let current = compareItem
                compareItem = loopingItem
                loopingItem = current
            }
        }

        return updatedArr
    }
}

console.log(squareArrAndSort(arr1))
