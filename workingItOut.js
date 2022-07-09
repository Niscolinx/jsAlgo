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

;(() => {
    function doStuff(text) {
        console.log({ text })
        const lowerCased = text.toLocaleLowerCase()
        const words = lowerCased.split(' ')

        const longWords = []
        for (let i in words) {
            if (words[i].length > 5) {
                longWords.push(words[i])
            }
        }

        return longWords.reverse().join(', ')
    }

    console.log('result', doStuff('heLLoworld world how is everything'))
})()
