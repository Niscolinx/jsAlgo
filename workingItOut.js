// Write a function which takes in a string and returns the number of each character on the string

function charCount(str) {
    //write out a object that keeps track of the characters
    let characters = {};

    //Write a loop that iterates over the characters
    for (let i = 0; i <= str.length; i++) {
        //you check if the letter/number has been added before, if it hasn't the add the number and give it a value of one 
        let obj = str[i];

        characters[obj] = ++characters[obj] || 1
    }
    return characters;


    // But if the number has been added before then one to the vue of the number

    //check if the number/letter is valid, if it isn't then return nothing

    //return the object the contains the total characters
}



// examples
// 'Your pin number is 23466'
/* this should return {y: 1
                       o: 1
                       u: 2
                       r: 2
                       p: 1
                       i:2
                       n:2
                       m:1
                       b:1
                       e:1
                       s:1
                       2:1
                       3:1
                       4:1
                       6:2  } */

console.log(charCount('this is h234appeninuuug right n..ow'))



