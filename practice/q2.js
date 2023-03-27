// Question2
// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements fromt the left to right are non-decreasing. An array is monotone descreasing if all its elements from the left to the right are non-increasing. Given an integer array return true if the given array is monotone, or false otherwise

const isMonotonic = (arr) => {
    //Check if the last item is greater or equal to the first element
    //Return true or false

    const isIncreasingOrEqual = arr[arr.length - 1] >= arr[0]

    if (isIncreasingOrEqual) {
        //Loop through and check if all the items are increasing or equal

        for (let i = 0; i < arr.length; i++) {
            
        }
    } else {
    }

    //Check if the last item is less than or equal to the first element
    //
}
