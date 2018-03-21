
function sports(){
    var fnObj = eval(new Function('book', 'return book;'));
    debugger;

    var result = fnObj('책');
    js.log(result);
}
window.sports();
