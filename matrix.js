let arr = Array.from({length: 4}, () => [])


for(let i = 0; i < arr.length; ++i){
    
    for(let j = i + 1; j <= arr.length; j++){
        if(j === 4) {
           for(let k = j; k < j; k++){
               arr[i].push(k)
           }
        }
        
        arr[i].push(j)
    }
}

console.table(arr)
