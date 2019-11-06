function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
    // const swap = (ar, idx1, idx2) => (
    //     [ar[idx1], ar[idx2]] = [ar[idx2], ar[idx1]]
    // )

    if(arr[i - 1] > arr[i]){
        let initial = i - 1
        arr[i - 1] = arr[i]
        arr[i] = arr[initial]

        if(){
            
        }
    }
}

    console.log(arr)
    return arr
}

insertionSort([7, 5, 2, 1, 65, 8, 11, 7, 0, 3, 4, 56, 34, -7, 0, -1])