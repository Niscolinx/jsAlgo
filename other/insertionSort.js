function sortArray(arr) {
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i]
        //console.log(currentVal)
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            // console.log(currentVal)
            // console.log('this is j ' + j)
            // console.log('this is arr[j] ' + arr[j])
            // console.log('this is j + 2 ' + arr[j + 1])

        }
        arr[j + 1] = currentVal;
      //  console.log('this is the second j + 1 ' + arr[j + 1])

    }
    return arr;
}


sortArray([4, 1, 7, 5, 9, 34, 8])