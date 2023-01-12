// Can you write a function that removes n  smallest number from an array without sorting it , if the n is negative return the array ,if there are duplicate smallest number remove the one with the smallest index number eg. removesmallest(3,[3,5,1,2,8,6]) // [5,8,6]
// removesmallest(-3,[3,5,1,2,8,6]) // [3,5,1,2,8,6]
// removesmallest(3,[3,5,-1,2,2,8,6]) // [5,2,8,6]

function removeSmallestNum(n, arr) {
    let count = n

    if (n < 0) return arr

    const findSmallet = () => {
        let smallest = 0
        let index = 0
        for (let i = 0; i < arr.length - 1; i++) {
            smallest = arr[index]
            console.log(smallest, 'arr[i+ 1]', arr[i + 1])
            if (smallest > arr[i + 1]) {
                smallest = arr[i + 1]
                index = i + 1

                if(smallest === arr[i + 1]){
                    arr.slice(index, 1)
                }
            }
        }
        count--
        return index
    }

    while (count > 0) {
        const smallestIndex = findSmallet()
        arr.splice(smallestIndex, 1)
    }
    return arr
}

removeSmallestNum(-3, [3, 5, 1, 2, 8, 6])
