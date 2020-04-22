String.prototype.toJadenCase = function () {
    //...
   this.split(' ').map(e => {
       let firstLeter = e.charAt(0).toLocaleUpperCase().concat(slice(1))
       console.log(firstLeter)
   })
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()

