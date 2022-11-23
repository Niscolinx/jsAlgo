function selectionSort(arr){
    // let temp = []
    // let first;
    // let min;
    // let sorted = []

    for(let i = 0; i < arr.length; i++){
        let min = i
       
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
               // console.log(`comparing the min: ${min} and the j: ${arr[j]}`)
              //first = arr[j] 
              min = j
             // console.log(`The new min ${min} and the first ${first}`)
            }
        }
        if(i !== min){
            console.log(min, i)
            let lowest = arr[i]
            arr[i] = arr[min]
            arr[min] = lowest 

        }
        // if(temp.length === 0){
        //     temp.push(min)
        // }
       // console.log(`The temp store`, temp)
       // console.log(`This is the arr i`, arr[i])
        // if(temp[0] < arr[i]){
        //     let firstItem = arr[i]
        //     let index = arr.indexOf(temp[0])
        //     arr[i] = arr[index]
        //     arr[index] = firstItem
        //     console.log(`firstItem ${firstItem}, arr i : ${arr[i]}`)
        //     temp.splice(0)
        // }
        
    }
    console.log(arr)
    return arr;
}

selectionSort([7, 5, 2, 1, 65, 8, 11, 7, 0, 3, 4, 56, 34,-7,0,-1])