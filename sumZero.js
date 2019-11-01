//Write a function called sumzero which accepts a sorted array of integars. The function should find the first pair that the sums to 0. Return the array of values that sum to zero or return undefined if a pair doesn't exist

const sumZero = (arr) => {
    arr.sort((a,b) => {return a-b})
    let sum = []
    let message = `There's no match`
    for(let i = 0; i < arr.length; i++){
        //for(let j = arr.length - 1; j > i; j--){
            for(let j = i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === 0){
                sum.push(arr[i],arr[j])
                console.log(sum)
            }
        }
        
    }
    if(sum.length === 0){
        console.log(message)
    }
   
}

sumZero([7,-3, -2, -1, 0, -2, 7, 4,1, 8])

//-3,-2,-1,0,1,2,3