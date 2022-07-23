;(() => {
    function diagonalDifference(arr) {
        let l_to_r = 0
        let r_to_l = 0
        for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
            for (let j = 0; j < arr[i][j].length; j++) {
                l_to_r += arr[i][j]
                r_to_l += arr[i]

                console.log(arr[i][j])
            }
        }
    }

    return diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
})()
