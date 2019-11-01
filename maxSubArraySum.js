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

    console.log('This is from the first algo', maxSubarraySum([1,2,3,4,5,6], 2))
})();

// (() => {
//     const maxSubarraySu = (arr, num) => {
        
//         if (num > arr.length) {
//             return null
//         }
//         let store = [];
//         let store2 = []
        
//         for(let i = 0; i < arr.length; i++){
//             if(store.length === 0){
//                 store.push(arr[i] + arr[i+1] + arr[i+2])
//             }
//             // if(store.length > 0 && ){
//             //     store2.push(arr[i-1]+ arr[i]+ arr[1+1])
//             //     console.log(arr[i-1])
//             // }
//         }
//         console.log(store)
//         console.log(store2)
//         store.sort((a,b) => {
//             return b-a
//         })
//         return store[0]
//     }


//     console.log('This is from the second algo', maxSubarraySu([4,2,3,4,5,6,7,8,9], 3))
// })()
