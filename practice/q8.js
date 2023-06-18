// [1, 3, [5,8]] = 1 + 3 + (5 * 8)^2
// [3,5, [1,8, [9, 3], 2], 1] = 3 + 5 + (1 + 8 + (9 + 3) ^ 3 + 2)^2 + 1

function peculiarArray(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            

        }

        total += arr[i]
    }
}
