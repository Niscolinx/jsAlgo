function quick(arr, left = 0, right = arr.length - 1) {
    const swapping = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    let pivot = arr[left];
    let count = left;
    for (let i = left + 1; i <= right; i++) {
        if (pivot > arr[i]) {
            count++
            swapping(arr, i, count)
            // let swap = arr[count]
            // arr[count] = arr[i]
            // arr[i] = swap
        }

    }
    // let first = arr[left]
    // arr[left] = arr[count]
    // arr[count] = first;

    swapping(arr, count, left)
    return count;
}

//Lets do the recursion here

function sort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivot = quick(arr, left, right)
          sort(arr, left, pivot - 1)
          sort(arr, pivot + 1, right)  

    }
    console.log(arr)
    return arr
}

sort([
    3, 4, 13, 6, 1, 2, -5,0
])
    // -5  1 2 3 4 6  13