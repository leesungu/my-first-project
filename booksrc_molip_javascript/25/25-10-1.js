
var one = 11;
function sports(){
    var two, code, result;
    two = 22;
    code = "function soccer(){return this.one + two};soccer()";

    result = eval(code);
    js.log(result);
}
window.sports();
