
var side = 'global';

var getValue = function(){
    var side = 'local';
    return side;
}

js.log(side);
js.log(getValue());


