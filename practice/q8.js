// [1, 3, [5,8]] = 1 + 3 + (5 + 8)^2
// [3,5, [1,8, [9, 3], 2], 1] = 3 + 5 + (1 + 8 + (9 + 3) ^ 3 + 2)^2 + 1

function peculiarArray(arr) {
    function sum(arr, depth = 1) {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                depth++
                total += Math.pow(sum(arr[i], depth), depth)
                depth--
            } else {
                total += arr[i]
            }
        }
        return total
    }
    return sum(arr, depth)
}

console.log(peculiarArray([1, 3, [5, 8, 2]]))
