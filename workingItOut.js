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


(() => {
function doStuff(text) {
    const lowerCased = text.toLocaleLowerCase()
    const words = lowerCased.split(' ')
    words.reverse()

    const trimmedWords = []
    for (let i in words) {
        trimmedWords.push(words[i].trim())
    }

    const longWords = []
    for (let i in trimmedWords) {
        if (trimmedWords[i].length > 5) {
            longWords.push(trimmedWords[i])
        }
    }

    let result = ''
    for (let i in longWords) {
        result += longWords[i]
        result += ', '
    }

    return console.log(result.slice(0, -2))
}

console.log('hello', doStuff('hello'))
})()



