// (() => {
//     const holdPrime = (arr) => {
//         let holdAll = []
//         let sumPrime = 0
//         if (arr.length === 0) {
//             return 0
//         }
//         for (let i of arr) {
//             if (i === 3) {
//                 holdAll.push(i)
//                 sumPrime += i
//             }
//             if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//                 holdAll.push(i)
//                 sumPrime += i
//             }
//         }
//         console.log(sumPrime)
//         console.log(holdAll)
//         return holdAll
//     }
//     return holdPrime([2, 4, 3, 51, 1, 7, 9, 56, 11, 5, 57584, 41, 54, 345, 342, 33, 37])
// })();


// (() => {
//     const sumPrimes = (num) => {
//         if (num === 1) return 1
//         return num + sumPrimes(num - 1)
//     }

//     console.log(sumPrimes(8))
// })();

// (() => {
//     const countDown = (num) => {
//         if (num <= 0) return
//         console.log(num)
//         num--
//         countDown(num)
//     }
//     countDown(5)
// })();

// (() => {
//     function fizzBuzz(o) {
//         let name1 = 'fizz';
//         let name2 = 'buzz';
//         let arr = []
//         for (let i = 0; i < 15; i++) {
//             if (i % 3 === 0) {
//                 i = name1;
//                 arr.push(i)
//             }
//             else if (i % 5 === 0) {
//                 i = name2;
//                 arr.push(i)
//             }
//             else if (i % 3 === 0 && i % 5 === 0) {
//                 i = name1 + name2;
//                 arr.push(i)
//             }
//             else { return n; }
//         }
//         console.log(arr)
//     }
//     return fizzBuzz(15)

// })()

(() => {
    function isPrime(num) {
        //TODO

        if (num <= 1) {
            console.log('false')
            return false
        }
        if(num % num == 0 && num % 1 == 0){
            console.log(true)
            return true
        }

        else{
            console.log(false)
            return false
        }
}

return isPrime(1)
})