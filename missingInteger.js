

function solution(A) {

    let obj = {}
    for (let i = 0; i < A.length; i++) {
        if (!obj.hasOwnProperty(A[i])) {
            obj[A[i]] = 1
        } else {
            obj[A[i]]++
        }
    }

    console.log({ obj })

    const objKeys = Object.keys(obj)
    let smallestInt = null
    for (let i = 0; i < objKeys.length - 1; i++) {
        if (Number(objKeys[i + 1]) - Number(objKeys[i]) !== 1) {
            smallestInt = 1 + objKeys[i]++
        }
    }

    if (!smallestInt) {
        const largest = A[A.length - 1] + 1
        return largest
    }

    console.log({ smallestInt })
    return smallestInt
}
