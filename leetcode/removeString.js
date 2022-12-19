const removeString = (str1, str2) => {

    const lowerCaseStr1 = str1.toLowerCase()
    const lowerCaseStr2 = str2.toLowerCase()


    if(lowerCaseStr1.length !== lowerCaseStr2.length){

        const getFirstSixChar = lowerCaseStr2.slice(0, lowerCaseStr1.length)


        return lowerCaseStr1.concat(getFirstSixChar)
    }
    return lowerCaseStr1.concat(lowerCaseStr2)


}

console.log(
    removeString('Prafff', 'Collinsd')
)