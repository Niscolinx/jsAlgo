// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = function (nums) {


    const result = []

    let sum = nums[0]
    result.push(sum)
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
        result.push(sum)
    }

    return result
}

console.log(runningSum([3, 1, 2, 10, 1]))
