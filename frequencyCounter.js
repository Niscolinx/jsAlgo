(() => {
    const count = (arr1, arr2) => {
        //check if their lengths are the same
        if (arr1.length !== arr2.length) {
            return false;
        }
        //loop through the items of any of the arrays
        for (var item of arr1) {
            let currentVal = arr2.indexOf(item ** 2)
            //check whether the square of the item exists in the other array
            if (currentVal === -1) {
                return false;
            }
            //remove the corresponding squared item, in order to know the frequency of occurrence 
            arr2.splice(currentVal, 1)
        } return true;
    }

    //console.log( 'this is the first count', count([1,2,3,4], [1,4,9,16]))
})();

(() => {
    const count = (arr1, arr2) => {
        //check if their lengths are the same
        if (arr1.length !== arr2.length) {
            return false;
        }
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        for (var key of arr1) {
            frequencyCounter1[key] = frequencyCounter1[key] + 1 || 1
        }
        for (var key of arr2) {
            frequencyCounter2[key] = frequencyCounter2[key] + 1 || 1
        }
        for (var key in frequencyCounter1) {
            if (!(key ** 2 in frequencyCounter2)) {
                return false
            }

            if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
                return false;
            }
        }
        return true
    }

    //console.log('this is the second count',count([1,3,2,3,5,6,4], [1,4,9,9,25,36,16]))
})();

(() => {
    const anagrams = (arr1, arr2) => {
        //check if their lengths are the same
        if (arr1.length !== arr2.length) {
            return false;
        }
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        for (var key of arr1) {
            frequencyCounter1[key] = frequencyCounter1[key] + 1 || 1
        }
        for (var key of arr2) {
            frequencyCounter2[key] = frequencyCounter2[key] + 1 || 1
        }
        console.log(frequencyCounter1, frequencyCounter2)
        for (var key in frequencyCounter1) {
            if (!(key in frequencyCounter2)) {
                return false
            }

            if (frequencyCounter2[key] !== frequencyCounter1[key]) {
                return false;
            }
        }
        return true
    }

    console.log('this is the anagram', anagrams('atct', 'catt'))
})();

