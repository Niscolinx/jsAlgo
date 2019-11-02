function binarySearch(arr, value){

    arr.sort((a,b) => {
        return a-b;
    })

    let left = 0;
    let right = arr.length-1;
    let middle = Math.floor((left + right)/2)
  
    //Loop through, whilst  the middle is not equal to the value
    while (arr[middle] !== value){

        if(value > arr[middle]){
            left = middle + 1
        }
        else{
            right = middle - 1
        }
        middle = Math.floor((left + right) / 2)

        console.log(left,middle,right)
    }
    console.log(middle)
    return middle;
}


binarySearch([3,5,6,2,1,8,7,4,2],11)