function get(){
    var list = arguments;
    debugger;
    for (var k = 0; k < list.length; k++){
        js.log(list[k] + this[k]);
    }
}
get.apply({0: 50, 1: 60, 2: 70}, [10, 20, 30]);

