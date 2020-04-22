String.prototype.toJadenCase = function () {
    //...
   let words = this.split(' ')

   for(let i = 0; i < words.length; i++){
       return words[i].charAt(0).toUpperCase() + words[i].slice(1)
   }
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

