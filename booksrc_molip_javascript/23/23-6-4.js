
'use strict';
var side = 'global';

var getValue = function(){
    side = 'local';
    return side;
}
js.log(getValue());
js.log(side);

