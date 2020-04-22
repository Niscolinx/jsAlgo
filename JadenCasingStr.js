String.prototype.toJadenCase = function () {
    //...
   let words = this.split(' ')

   console.log(words)

   for(let i = 0; i < words.length; i++){
       console.log(words[i][0])
   }
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

