// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


const isIsomorphic = function (s, t) {

    if(s.length !== t.length){
        return false
    }

    let firstString = {}
    let secondString = {}
    for (let i = 0; i < s.length; i++) {
        if (firstString[s[i]]) {
            firstString[s[i]] = [...firstString[s[i]], i]
        } else {
            firstString[s[i]] = [i]
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (secondString[t[i]]) {
            secondString[t[i]] = [...secondString[t[i]], i]
        } else {
            secondString[t[i]] = [i]
        }
    }


    if(Object.keys(firstString).length !== Object.keys(secondString).length){
        return false
    }

    const reduceToAnArray = (obj) => {
        return Object.values(obj).reduce((prev, curr) => {
            return prev.concat(curr)
        }, [])
    }

    const firstStringIndexValues = reduceToAnArray(firstString)
    const secondStringIndexValues = reduceToAnArray(secondString)



    const isIsoMorphic = firstStringIndexValues.every((item, index) => {
        return item === secondStringIndexValues[index]
    })

     //const isIsoMorphic = firstString


    return isIsoMorphic
}

console.log(isIsomorphic('13', '11'))
