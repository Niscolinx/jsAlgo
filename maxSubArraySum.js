(() => {
    const maxSubarraySum = (arr, num) => {
        if (num > arr.length) {
            return null
        }
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr[i + j]
            }
            if (temp > max) {
                max = temp;
            }

        }
        return max
    }

    console.log('This is from the first algo', maxSubarraySum([4, 2, 3, 4, 5, 6, 7, 8, 9], 3))
})();

(() => {
    const maxSubarraySu = (arr, num) => {
        
        if (num > arr.length) {
            return null
        }
        let tempStore = 0
        let maxStore = 0
        for(let i = 0; i<num; i++){
            tempStore += arr[i]
        }
        maxStore = tempStore
        for(let i = num; i < arr.length; i++){
            tempStore = tempStore - arr[i - num] + arr[i]
            maxStore = Math.max(tempStore, maxStore)
        }
       return maxStore;
    }


    console.log('This is from the second algo', maxSubarraySu([4,2,3,4,5,6,7,8,9], 3))
})()
