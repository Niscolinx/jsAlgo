//Filling the survey form in absu portal before seeing your result
(() => {
    let result = document.getElementsByClassName('form-control');
    console.log(result.length);
    let Temresult = Math.floor(result.length / 1.56);
    for (var i = 0; i < Temresult; i++) {
        result[i].value = '3'
    };
    for (var i = Temresult; i < result.length; i++) {
        result[i].value = '2'
    }
    document.getElementsByClassName("btn btn-success btn-lg mr5")[0].click()

})()