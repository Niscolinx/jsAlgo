// Write a function which takes in a string and returns the number of each character on the string

// (() => {

//     function charCount(str) {
//         //write out a object that keeps track of the characters
//         let characters = {};

//         //Write a loop that iterates over the characters
//         for (let i = 0; i <= str.length; i++) {
//             //you check if the letter/number has been added before, if it hasn't the add the number and give it a value of one
//             let obj = str[i];

//             characters[obj] = ++characters[obj] || 1
//         }
//         return characters;

//     }

//     console.log(charCount('this is h234appeninuuug right n..ow'))
// })()

// ;(() => {
//     function doStuff(text) {
//         console.log({ text })
//         const lowerCased = text.toLocaleLowerCase()
//         const words = lowerCased.split(' ')

//         const longWords = []
//         for (let i in words) {
//             if (words[i].length > 5) {
//                 longWords.push(words[i])
//             }
//         }

//         return longWords.reverse().join(', ')
//     }

//     // console.log('result', doStuff('heLLoworld world how is everything'))

//     //The conversion time in "yyyy-mm-dd hh:mm:ss+|-hh:mm" format.

//     //timezone is the difference between the local time and UTC time.
//     //The timezone is represented as a string of the form "+/-hh:mm".
//     //For example, the timezone offset for EST is "-05:00".

//     //The date is represented as a string in the format "yyyy-mm-dd".
//     const date = new Date()
//     const year = date.getFullYear()
//     const month = date.getMonth()
//     const day = date.getDate()
//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()
//     const timezone = date.getTimezoneOffset()

//     const timezoneString = `${timezone > 0 ? '-' : '+'}${Math.floor(timezone / 60)}:${timezone % 60}`

//     console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}${timezoneString}`)

//     console.log({timezone})

//     // const date = new Date().toLocaleString('en-US', {
//     //     timeZone: 'yyyy-mm-dd',
//     // })
//     // console.log(date)
// })()

;(() => {
    function minimumMoves(arr1, arr2){
           
        console.log(arr2, arr1)

    }

    const arr1 = [123, 543]
    const arr2 = [321, 279]

    // console.log(minimumMoves(arr1, arr2))
})()
