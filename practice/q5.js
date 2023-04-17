// You are given an array of integers and another target targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up to targetValue


// const arr1 = [3,5,3,6] = [8, 6, 8, 5]
// const targetValue = 11
// const arr1 = [4,5,3,6,7,3] = [4,3,5,2,1,5]
// const targetValue = 8

//If array has only 1 item return 0
//If two integers cannot form the targetValue return 0

//Divide targetValue by 2
// In the case of 8, it's 4 and 4

const sum_to_target = (arr, target_value) => {


    for(let i = 0; i < arr.length - 1; i++){

        for(let j = i + 1; j < arr.length; j++){

            if(arr[i] + arr[j] === target_value){
                return [i, j]
            }
        }

    }

    return 0
}

console.log(sum_to_target([], 11))
