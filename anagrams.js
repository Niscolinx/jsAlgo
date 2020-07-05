// Write a function that takes two strings, and check whether all the characters in the first string are also in the second string deglect their index

function anagrams(first, second) {
    
    if (first.length !== second.length) {
        return false;
    }
    let values = {};

    for (var items of first) {
        values[items] ? values[items] += 1 : values[items] = 1
    }

    for (var item of second) {
        if (!values[item]) {

            return false;

        }
        console.log(values)

    }
    return true;

}







anagrams('anagrams', 'aaadmras')