
'use strict';
var outside = 'global';

var getValue = function(){
    inside = 'local';
    return inside;
}

js.log(getValue());
