
var bookValue,
    obj = {};

Object.defineProperty(obj, 'book', {
    get: function(){
        return bookValue; 
    },
    set: function(param){
        bookValue = param;
    }
});

obj.book = 12345;
result = obj.book;
js.log(result);
