var longestCommonPrefix = function (arr) {
    let newStr = []
    let items;
    if(arr.length === 0){
        return ""
    }
    let everyItem = arr.every(x => x === arr[0])
    if(everyItem){
        console.log('This is true', arr[0])
        return arr[0]
    }
    if(!everyItem){
        for (let i = 0; i < arr.length; i++) {
            let hold = arr[i][0]
            let item = arr[i].split().every(x => {
                x[0] !== hold
                console.log(x[0])})
            
            // for(let j = 0; j < arr[i].length; j++){
            //     if(hold === arr[i][j]){
            //         items = true;
            //     }
            // }
            console.log(item)
        }
        if(items){
            console.log(arr)
            return;
        }
    }
   
           
            //newStr.push(arr[i].toLowerCase().slice(0, 2))

    // for (let i = 0; i < newStr.length; i++) {
       
    //     console.log('')
    //     if (newStr[0] !== newStr[i]) {
    //         if(newStr.length <= 2){

    //             if (newStr[0][0] === newStr[i][0]) {
    //                 console.log(newStr[0][0])
    //                 return newStr[0][0]
    //             }
    //         }
    //         return ''
    //     }
    // }
    return newStr[0]

};
longestCommonPrefix(["aac", "aac", "abc", "iec"])