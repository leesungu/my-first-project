

var title = function(){
    return {value: 123};
}

title.prototype = {
    getValue: function(){}
}

var obj = new title();
js.log(obj.value);

//------------------
/*
var title = {
    initValue: function(){
        return {value: 456}
    },
    getValue: function(){}
}
js.log(title.initValue().value);
*/
