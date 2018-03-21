
var getValue = function() {
    var list = arguments, 
        total = 0;

    for (var k = 0; k < list.length; k++){
        total += list[k];
    }
    return total;
};
js.log(getValue.apply(this, [10, 20, 30]));

