//In the fibonacci sequence, each subsequent term is obtained by adding the first 2 preceding 2 terms. This is true for all numbers except the first 2 numbers of the fibonacci series, as they do not have 2 preceding numbers. The first 2 terms in the fibonacci sequence are 0 and 1. F(n) = F(n-1) + F(n-2) for n > 1. Write a function that finds F(n) given n, where n is an integer greater than or equal to 0. For the first term n = 0


function fibonacci(n) {
    const hash = {}
    if (n <= 1) return n

    const getTimeNow = Date.now()

    if (hash[n]) return hash[n]

    const result = fibonacci(n - 2) + fibonacci(n - 1)

    hash[n] = result

    const getTimeAfter = Date.now()

    console.log(`Time taken for ${n} is ${getTimeAfter - getTimeNow}ms`)

    return result
}

console.log(fibonacci(1000))
