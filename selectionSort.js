function selectionSort(arr){
    let temp = []

    for(let i = 0; i < arr.length; i++){
        let first = arr[i]
        
        for(let j = i + 1; j < arr.length; j++){
            console.log('The first is :', first)
            if(first > arr[j]){
                first = arr[j]
                console.log('The child arr', arr, arr[j])
            }
        }
        temp.push(first)
        arr.pop(first)
        console.log('The temp is :', temp)
        console.log('The parent arr', arr)
    }
    console.log(temp);
    return temp;
}

selectionSort([7, 5, 2, 1, 65, 8, 11, 7, 0, 3, 4, 56, 34])