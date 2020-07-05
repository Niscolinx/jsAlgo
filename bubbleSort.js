// function bubbleSort(arr){

//     let store = []
//     function smbubbleSort(items){
//         let tempStore = []
//         for(let i = 0; i < items.length; i++){
//             if(items[i] > items[i + 1]){
//                 let tempItem = items[i + 1]
//                 items[i + 1] == items[i]
//                 items[i] = tempItem;
//                 console.log(items[i])
//             }
//             tempStore.push(items[i])
//         }
        
//         console.log(tempStore)
//         smbubbleSort(arr)
//     }
// }

// bubbleSort([5,3,4,1,7,2])

function bubbleSort(arr){

   // bubbleSort([7, 5, 2, 1, 65, 8])
   let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        console.log(`This is the mother array`, arr)
        for(let j = 0; j < i - 1; j++){
            console.log(`This is the child array`, arr)
            console.log(`small`, arr[j])
            console.log(`large`, arr[j + 1])
            if(arr[j] > arr[j + 1]){
                console.log(`This is the if statement`, arr[j], arr[j + 1])
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                noSwaps = false;
            }
            if(noSwaps) return;
        }
    }

    console.log(arr)
    return arr
}

bubbleSort([7,5,2,1,65,8,11,7,0,3,4,56,34])