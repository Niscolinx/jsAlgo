String.prototype.toJadenCase = function () {
    //...
   let words = this.split(' ')

   for(let i = 0; i < words.length; i++){
       console.log(words[i])
   }
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

