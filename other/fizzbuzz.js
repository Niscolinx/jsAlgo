(() => {
    const fizzBuzz = (n) => {
        let tempStore = []
        let finalStore = []
        for (let i = 1; i <= n; i++) {
            tempStore.push(i)
        }
        for (var i of tempStore) {
            if (!(i % 3 == 0 || i % 5 == 0 || i % 3 == 0 && i % 5 == 0)) {
                finalStore.push(i)
            }
            if (i % 3 == 0 && i % 5 == 0) {
                finalStore.push(i = 'fizzbuzz')
            }
            if (i % 3 == 0) {
                finalStore.push(i = 'fizz')
            }
            if (i % 5 == 0) {
                finalStore.push(i = 'buzz')
            }

        }
        let total = finalStore.join('')
        return total
    };

    
    return fizzBuzz(05)


})()