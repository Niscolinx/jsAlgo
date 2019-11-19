// function insertionSort(arr){
//     for(let i = 0; i < arr.length -1; i++){

//         console.log('before the swap', arr[i], ' and ', arr[i + 1])

//         if(arr[i] > arr[i + 1]){
//             let largeNum = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = largeNum
//             console.log('swapped', arr[i], ' and ', arr[i + 1], ' and ', arr[i - 1], ' and ', arr)

//             if(arr[i + 1] > arr[i - 1]){
//                 console.log('Swap here')
//                 for(let j = 0; j < i; j++){
                
//                     if(arr[j] > arr[i]){
//                         let sortedLarge = arr[j]
//                         arr[j] = arr[i]
//                         arr[i] = sortedLarge

//                         console.log('sorted arr', arr)
//                     }
                
//             }
//         }
//         console.log('after the swap', arr[i], ' and ', arr[i + 1])
//         }
//     }

//     console.log(arr)
//     return arr
// }

// insertionSort([7, 5, 2, 3, 65, 8, 11, 0, 1, 4, 56, 34, -7, -1])
           

//Another approach

function insertionSortt(arr){

    for(let i = 1; i < arr.length; i++){
         let minValue = arr[i]
        console.log('The first loop', arr[j + 1], ' and the minValue', minValue, 'and the arr j is', arr[j])

        for(var j = i - 1; j >= 0 && arr[j] > minValue; j--){
            console.log('The first inner loop', arr.indexOf(arr[j + 1]), ' and ', arr.indexOf(arr[j]))
            console.log('The iteration of the array', arr[j])

            arr[j + 1] = arr[j]
            console.log('The inner loop', arr[j + 1], ' and ', arr[j], arr)
        }
        console.log('The outer loop', arr.indexOf(arr[j + 1]), ' and', arr[j + 1], ' and the minValue', minValue, 'and the arr j is', arr[j])
        arr[j + 1] = minValue
        console.log('The second outer loop', arr[j + 1], ' and the minValue', minValue, 'and the arr j is', arr[j])
        
        console.log(arr)
    }
    console.log(arr)
    return arr
}

insertionSortt([4,3,6,7,1,0,5])