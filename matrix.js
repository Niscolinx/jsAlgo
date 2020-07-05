(() => {
    //Create an inner array that has a length of 4
    let arr = Array.from({ length: 4 }, () => [])

    let temp = arr.length

    let count;

    for (let i = 0; i < arr.length; ++i) {
        
        for (let j = i + 1; j <= arr.length; j++) {
            
            arr[i].push(j)
        }
        //After the first loop is done, take count and countinue looping 
        count = temp - arr[i].length
        for(let k = 1; k < count + 1; k++){

            arr[i].push(k)
        }
    }
    // Reduce it to a single array
   let newArr =  arr.reduce((a, b) => {
       return a.concat(b)
    }, [])
    
    return newArr
})()