function filter_list(arr) {
    // Return a new array with the strings filtered out

    let result = arr.filter(item => {
        return typeof item === 'number' && item > -1
    })

    return result
}


filter_list([1, 2, 'aasf', '1', '123', 123, -6]) //== [1, 2, 123]
