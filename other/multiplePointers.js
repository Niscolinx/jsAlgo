(() => {
    const sumZero = (arr) => {
        let first = 0;
        let second = arr.length - 1
        // let message = console.log('the sum cannot be resolved to zero');
        while (first < second) {
            let sum = arr[first] + arr[second]
            if (sum === 0) {
                console.log([arr[first], arr[second]])
                return;
            }
            else if (sum > 0) {
                second--
            }
            else {
                first++
            }
            
        }
        console.log("The pair doesn't exist")
    }
    sumZero([-3, -2, -1, 0,-2,7,4,1,8])
    //example--- sumZero([-3,-2,-1,0,1,2,3]) should return [3,-3]
})();

// (() => {
//     const countUnique = (arr) => {
//         if (arr.length === 0) { return 0 }
//         arr.sort(function (a, b) { return a - b });
//         console.log(arr)
//         var i = 0;
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] !== arr[j]) {
//                 i++;
//                 arr[i] = arr[j]
//             }
//         }
//         return i + 1
//     }
//     //console.log(countUnique([1, 1, 1, 3, 5, 6, 22, 2, 7, 2, 11, 1, 1, 2, 17]))
//     //example--- countUnique([1,1,1,2,3,3,5,3]) should return [4]
// })()

