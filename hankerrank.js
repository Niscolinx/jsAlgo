;(() => {
    function diagonalDifference(arr) {
        let l_to_r = 0
        let r_to_l = 0
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                l_to_r += arr[i][0]
                r_to_l += arr[i][arr[i].length - 1]
            }
            if (i === 1) {
                l_to_r += arr[i][1]
                r_to_l += arr[i][1]
            }

            if (i === 2) {
                r_to_l += arr[i][0]
                l_to_r += arr[i][arr[i].length - 1]
            }

        }

        const result = Math.abs(l_to_r - r_to_l)


        return result
    }

    return diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ])
})()


