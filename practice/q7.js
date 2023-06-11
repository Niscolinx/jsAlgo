//In the fibonacci sequence, each subsequent term is obtained by adding the first 2 preceding 2 terms. This is true for all numbers except the first 2 numbers of the fibonacci series, as they do not have 2 preceding numbers. The first 2 terms in the fibonacci sequence are 0 and 1. F(n) = F(n-1) + F(n-2) for n > 1. Write a function that finds F(n) given n, where n is an integer greater than or equal to 0. For the first term n = 0


function fibonacci(n){
 
    if(n <= 1) return n

    const result = n + fibonacci(n-1)

    console.log({result})

    return result

}


console.log(fibonacci(2))