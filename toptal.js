//Task 1

function crop(message, K) {
    const originalLen = message.length
    if (originalLen < K) {
        return message
    } else {
        const words = message.split(' ')
        const splitWords = message.substring(0, K).split(' ')

        if (words[splitWords.length - 1] != splitWords[splitWords.length - 1])
            return splitWords.slice(0, splitWords.length - 1).join(' ')
        else return splitWords.join(' ')
    }
}

var str = 'The quick brown fox jumped over the fence'
console.log(crop(str, 11))


//Task 2

function solution(A) {
    let zeroesCount = 0 //keeps track of zeroes
    let pairs = 0 //aka the result

    for (let i = 0; i < A.length; i++) {
        A[i] === 0 ? zeroesCount++ : (pairs += zeroesCount) //count 0s or add to answer when we encounter 1s

        if (pairs > 1000000000) {
            //required by the question
            return -1
        }
    }

    return pairs
}

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort(function (a, b) {
        return a - b
    })

    var next = 1
    var i = 0
    while (next === A[i]) {
        next++
        i++
    }

    return next
}