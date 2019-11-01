(() => {

    const factorial = (num) => {
        let store = 1;
        for (let i = num; i > 1; i--) {
            store *= i
        }
        console.log(store)

    }

    return factorial(5)
})()

