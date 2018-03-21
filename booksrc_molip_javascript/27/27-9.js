
var title = function(option){
    this.option = option;
}

title.prototype = {
    getValue: function(){
        return this.option;
    }
}

var one = new title(100);
var two = new title([200, 300]);

one.option = 77;
js.log(one.getValue());

js.log(two.getValue());

