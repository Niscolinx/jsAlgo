function merge(arr1, arr2) {
   
    let i = 0;
    let j = 0;
    let result = []
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }
        else {
            result.push(arr1[i])
            i++
        }
        
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(arr){
     if(arr.length <= 1) return arr   
    let middle = Math.floor(arr.length / 2)
    let firstHalf = mergeSort(arr.slice(0, middle))
    let secondHalf = mergeSort(arr.slice(middle))
    console.log('From mergeSort', firstHalf, secondHalf)
    return merge(firstHalf, secondHalf)
}
mergeSort([3,4,13,6,1,2,-5])

