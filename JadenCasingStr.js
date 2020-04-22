String.prototype.toJadenCase = function () {
    //...
   let words = this.split(' ')

   console.log(words.length)

   for(let i = 0; i < words.length; i++){
       console.log(words[0])
   }
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

