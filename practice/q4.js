// Question
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith lines are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water(depth is constant across containers). Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water. Notice that you may not slant the container

//Constraints
//y axis does not count as a wall
//A line inside the container does not affect the area

//[1,5,6,3,4]

//get the last number in the list
//{
//     [6,2],
//     [5,1],
//     [4,4],
//     [3,3],
//     [1,0]
// }

function mostWaterContainer(arr) {
    let max = 0
    function getArea(currArr, compareArr) {
        const x = Math.abs(currArr[1] - compareArr[1])
        const y = Math.min(currArr[0], compareArr[0])

        return x * y
    }


    for(let [i, key] of arr){
        console.log({arr})
    }


    return max
}
