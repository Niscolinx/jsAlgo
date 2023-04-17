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

//My Solution
const isomorphic1 = (str1, str2) => {
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
    } //time - O(N), space - O(N)

    if (frq_1.size !== frq_2.size) {
        return false
    }

    const arr1 = Array.from(frq_1.values()).flat() //time - O(N), space - O(N)
    const arr2 = Array.from(frq_2.values()).flat() //time - O(N), space - O(N)

    console.log({arr1})

    for (let j = 0; j < arr1.length; j++) {
        console.log(arr1[j], arr2[j])

        if (arr1[j] !== arr2[j]) {
            return false
        }
    }///time - O(N)


    //time - O(N), space - O(N)

    return true
}


function isomorphic2(str1, str2){

    const freq_map = new Map()


    for(let i = 0; i< str1.length; i++){

        if(freq_map.has(str1[i])){
            if(freq_map.get(str1[i])){}
        }

        else{

            freq_map.set(str1, str2)
        }

    }

}



const s = 'abacusb'
const t = 'abajjfo'

console.log(isomorphic1(s, t))
