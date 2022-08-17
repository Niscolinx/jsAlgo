let count = 9

function outer() {
    function counter() {
        count++

        console.log('counter', count)

        function another() {
            count++
            console.log('another', count)
        }

        return another()
    }
    let count = 0

    return counter
}

outer()()
