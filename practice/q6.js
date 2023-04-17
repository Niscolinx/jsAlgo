//Given two strings s and t, determine whether they are isomorphic, two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.

// {
//     a:[0, 2],
//     b:[1],
//     c:[2],
//     u:[3],
//     s:[4]
// }
// {
//     p:[0, 2],
//     b:[1],
//     g:[2],
//     i:[3, 4]
// }

const isomorphic = (str1, str2) => {
    const frq_1 = new Map()
    const frq_2 = new Map()

    for (let i = 0; i < str1.length; i++) {
        if (frq_1.has(str1[i])) {
            frq_1.set(str1[i], frq_1.get(str1[i]).concat(i))
            frq_2.set(str2[i], frq_2.get(str2[i]).concat(i))
        } else {
            frq_1.set(str1[i], [i])
            frq_2.set(str2[i], [i])
        }
    }

    console.log(frq_1, frq_2)

    if (frq_1.size !== frq_2.size) {
    
        return false
    }

    if(frq_1.values() !== frq_2.values()){
        return false
    }

    return true

}

const s = 'abacus'
const t = 'pbpgio'

console.log(isomorphic(s, t))
