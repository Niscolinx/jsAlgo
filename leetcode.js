//Leetcode questions
(() => {

    //An array is monotonic if it is either monotone increasing or monotone decreasing.
    //An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
    //Given an integer array nums, return true if the given array is monotonic, or false otherwise.

    var isMonotonic =  function(nums) {
       

        let mono = ''
        if(nums[0] > nums[nums.length - 1]) {
            mono = 'decreasing'
            console.log({mono})
            for(let i = 0; i < nums.length; i++) {
                if(nums[i] < nums[i + 1]){
                    return false
                }
            }

            return true
        }
        else {
            mono = 'increasing'
            console.log({mono})
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] > nums[i + 1]) {
                    return false
                }
            }

            return true
        }

  
    }

    console.log(isMonotonic([3,3,3,0,4]))
})()