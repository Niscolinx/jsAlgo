function filter_list(arr) {
    // Return a new array with the strings filtered out
    arr.filter(item => {
        typeof item === 'number'
    })

}


filter_list([1, 2, 'aasf', '1', '123', 123]) //== [1, 2, 123]
