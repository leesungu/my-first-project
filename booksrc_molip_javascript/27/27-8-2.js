
var music = function(){
    return 123;
}

music.prototype.getValue = function(){
    return 456;
}

var obj = new music();

debugger;
js.log(obj.getValue());


// return 'abc';
// return [1, 2, 3]
// return function(){}
