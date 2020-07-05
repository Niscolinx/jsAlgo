function recursion(arr){

    let totalStore = []
    //Helper function
    function smRecursion(item){
        
        for(let i = 0; i < item.length; i++){
            if(item[i] % 2 === 1){
                totalStore.push(arr[i])
            }
        }
    }
    smRecursion(arr)
    return totalStore;
}

recursion([2,4,5,3,7,9,8])

//pure recursion
function pureRecursion(arr){

    let newStore = []

    for(let i of arr){
        if(i % 2 ===1){
            newStore.push(i)
            console.log('the newstore is', newstore)
        }
    }
    newStore = newStore.concat(pureRecursion(arr.slice(1)))
    return newStore
}
pureRecursion([2, 4, 5, 3, 7, 9, 8])

