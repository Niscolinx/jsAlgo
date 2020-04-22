String.prototype.toJadenCase = function () {
    //...
   this.split(' ').map(e => {
       console.log(e.charAt(0).toLocaleUpperCase())
   })
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

