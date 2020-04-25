// Write a program that has a list of ten words, some of which have repeated letters and some
// which don’t.Write a program that picks a random word from the list that does not have any
// repeated letters.

const pickRandomWord = () => {

    //Crated a list of random words with some words having repeated letters
    let words = ['yaah', 'hello', 'world', 'come', 'tomorrow', 'alright', 'gotten', 'love', 'Holy', 'see']

    let bucket = {}
    for(let i = 0; i < words.length; i++){

        for(let j = 0; j < words[i].length; j++){
            bucket[words[i][j]] = ++bucket[words[i][j]]|| 1
        }
    }

    console.log(bucket)
    
}

pickRandomWord()