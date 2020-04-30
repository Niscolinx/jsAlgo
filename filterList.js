function filter_list(arr) {
    // Return a new array with the strings filtered out

    let result = arr.filter(item => {
        return typeof item === 'number'
    })

    console.log(result)
}


filter_list([1, 2, 'aasf', '1', '123', 123]) //== [1, 2, 123]
