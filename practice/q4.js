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

//{
//     [4,4],
//     [3,3],
//     [6,2],
//     [5,1],
//     [1,0]
// }

//area= 4* 3= 12

//{
//     [8,4],
//     [7,1],
//     [6,3],
//     [5,2],
//     [4,5]
//     [3,0]
// }

//{
//     [4,5]
//     [8,4],
//     [6,3],
//     [5,2],
//     [7,1],
//     [3,0]
// }

// area = 7* 3 = 21

function mostWaterContainer1(arr) {
    let max = 0
    const listValues = []

    function getArea(currArr, compareArr) {
        const x = Math.abs(currArr[1] - compareArr[1])
        const y = Math.min(currArr[0], compareArr[0])

        console.log({ currArr, compareArr })

        return x * y
    }

    for (let i = 0; i < arr.length; i++) {
        const item = [arr[i], i]
        listValues.push(item)
    } // time - O(N), space - 0(N)

    // [[6, 7],
    // [5, 6],
    // [4, 1],
    // [4, 3],
    // [2, 0],
    // [1, 2]]
    // }

    const sorted = listValues.sort((a, b) => b[0] - a[0]) //// time - O(N)

    console.log({ sorted })

    for (let i = 0; i < sorted.length - 1; i++) {
        const area = getArea(sorted[i], sorted[i + 1])
        max = area > max ? area : max
        console.log({ area, max })
        console.log('======')
    } // time - O(N)

    //total
    // time - O(N + N + N) = 0(3N) = 0(N)
    // space - 0(N)
    return max
}


//Final Answer
function mostWaterContainer2(arr) {
    if (arr.length <= 1) {
        return 0
    }

    let max = 0

    let moveLength = arr.length - 2

    let left_idx = 0,
        right_idx = arr.length - 1

    while (moveLength >= 0) {
        moveLength--

        const area = getArea(arr, left_idx, right_idx)
        max = area > max ? area : max

        arr[left_idx] <= arr[right_idx] ? left_idx++ : right_idx--
    } //Time - O(N), space O(1)

    function getArea(arr, left_idx, right_idx) {
        const minValue = Math.min(arr[left_idx], arr[right_idx])
        const diff = Math.abs(right_idx - left_idx)

        return minValue * diff
    }

    return max

    //Check the min value between x, y  = 2
    //Get the difference between their indices = 7 - 0 = 7
    //get the area, then add one from the lower value

    //1. area = 2* 7 = 12,
    // check for the min value between left pointer and right pointer
    // Then add increment or decrement the pointer

    // 2 < 6, so left++ , now left = 1, right = 7
    //2. area = 4* 6 = 24,

    // 4 < 6, so left++ , now left = 2, right = 7
    //3. area = 1*5 = 5,

    // 1 < 6, so left++ , now left = 3, right = 7
    //4. area = 4*4 = 16,

    // 4 < 6, so left++ , now left = 4, right = 7
    //5. area = minvalue(7,6) = 6, i.e =  6*3 = 18,

    // 7 > 6, so right-- , now left = 4, right = 6
    //5. area = minvalue(7,5) = 5, i.e = 5*2 = 10,

    // 7 > 5, so right-- , now left = 4, right = 5
    //5. area = 7*1 = 7,
}

//console.log(mostWaterContainer2([1, 5, 6, 3, 4]))
//console.log(mostWaterContainer2([10, 6, 5, 6, 5, 7]))
console.log(mostWaterContainer2([3,7,5,6,8,4]))
//console.log(mostWaterContainer2([2, 4, 1, 4, 7, 8, 5, 6]))
