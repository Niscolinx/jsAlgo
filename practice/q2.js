// Question2
// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements fromt the left to right are non-decreasing. An array is monotone descreasing if all its elements from the left to the right are non-increasing. Given an integer array return true if the given array is monotone, or false otherwise

const isMonotonic = (arr) => {
    //Check if the last item is greater or equal to the first element
    const isIncreasingOrEqual = arr[arr.length - 1] >= arr[0]

    if (isIncreasingOrEqual) {
        //Loop through and check if all the items are increasing or equal

        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] < arr[i]) {
                return false
            }
        }
        return true
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] > arr[i]) {
                return false
            }
        }

        return true
    }
}

//const givenArr = [2,2,2,2,2]
const givenArr = [2,1,0,5,2]
//const givenArr = [2,0,0,1,1]
//const givenArr = [1,5,5,6,8,12,3,0]
 //const givenArr = [1,5,5,6,8,12]
//const givenArr = [7,6,5,1,3,0]
//const givenArr = [7, 6, 5, 2, 1]

console.log(isMonotonic(givenArr))
