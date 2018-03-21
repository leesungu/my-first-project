
var book = function(){};
book.prototype.getValue = function(){};

var obj = new book();
Object.preventExtensions(obj);

obj.getAmount = function(){};
js.log(obj.getAmount);
