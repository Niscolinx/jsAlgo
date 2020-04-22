String.prototype.toJadenCase = function () {
    //...
   let words = this.split(' ')

   console.log(words.length)

   for(let i = 0; i < words.length; i++){
       console.log(words[i].charAt(0).toUpperCase() + words[i].splice(1))
   }
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

