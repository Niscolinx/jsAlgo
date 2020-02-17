(() => {
    const checkRep = item => {
        let temp = {}
        for (var charAt of item) {
            charAt = charAt.toLowerCase();
            if (/[a-z0-9]/.test(charAt)) {
                temp[charAt] = ++temp[charAt] || 1
            }
        }
        return temp;
    }

    console.log(checkRep("how are you doing today my dear"))
})();

(() => {
    function isPalindrome(str) {
        let temp = []
        let temp1 = []
        for (let charAt of str) {
            temp.push(charAt)
        }
        for (let i = str.length - 1; i >= 0; i--) {
            temp1.push(str[i])
        }
        console.log(temp, temp1)
        if (temp.join('') !== temp1.join('')) {
            return false
        }
        return true
    }
    //console.log(isPalindrome("A Santa Lived As a Devil At NASA"));
    console.log('first test')
    console.log(isPalindrome("boob"));

})()
//so basically 'hello' should return h:1,e:1,l:2,o:1