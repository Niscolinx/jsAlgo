let count = 9



function outer() {
    function counter() {
        count++

        console.log('counter', count)

        function another() {
            count++
            console.log('another', count)

            const toCall = console.log(theName('hello'))

            return toCall
        }

        return another()
    }
    let count = 0


    return counter
}

function theName (name) {
    console.log('the name')
    return `The name is ${name}`
}

outer()()
