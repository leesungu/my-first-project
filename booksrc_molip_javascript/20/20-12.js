
var book = function(){
    this.count = 123;
};
book.prototype = {
    getValue: function(){},
    getAmount: function(){}
}

var obj = new book();

var result = Object.getPrototypeOf(obj);
for (var key in result){
    js.log(key);
};
