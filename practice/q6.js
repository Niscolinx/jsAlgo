//Given two strings s and t, determine whether they are isomorphic, two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.


// const s = 'abacus'
// const t = 'pbpgii'

{
    a:[0, 2],
    b:[1],
    c:[2],
    u:[3],
    s:[4]
}
{
    p:[0, 2],
    b:[1],
    g:[2],
    i:[3, 4]
}

const isomorphic = (string1, string2) => {
    
    const string1_frequency_count = {}
    const string2_frequency_count = {}

    for(let i = 0; i < string1.length; i++){

        string1_frequency_count[string1] = [...string1_frequency_count[string1], i]
        string1_frequency_count[string2] = [...string1_frequency_count[string2], i]
    }

}