// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = function (s, t) {
    let firstString = {}
    let secondString = {}
    for (let i = 0; i < s.length; i++) {
        if (firstString[s[i]]) {
            firstString[s[i]] = [...firstString[s[i]], i]
        }
        else{
            firstString[s[i]] = [i]
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (store[s[i]]) {
            store[s[i]] = [...store[s[i]], i]
        }
        else{
            store[s[i]] = [i]
        }
    }

    return Object.values(store)
}

console.log(isIsomorphic('egg', 'add'))
