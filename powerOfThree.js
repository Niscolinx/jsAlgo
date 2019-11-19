function powerOfThree(n){
    let result = 3
    if (n === 1) {
        return true
    }
    if (n === 0 || n === 2 || n % 3 === 1) {
        console.log(false)
        return false;
    }

    for(let i = 3; i < n - 3 && result < n; i+=3){
        result *= 3
        console.log('The inner loop result is', result)
    }
    if(result !== n){
        console.log(false)
        return false
    }
    console.log('The final result is :', result)
    console.log(true)
    return true
}

powerOfThree(30)

