const hashFunctions = (str, length) =>{

    let total = 0;
    let primeNum = 31;
    for(let i = 0; i < Math.min(str.length, 100); i++){
        let val = str[i].charCodeAt(0) - 96
        total += (total * primeNum + val) % length
    }
    console.log(total)
}


hashFunctions('blue', 13)