
var obj = {};
Object.defineProperty(obj, 'book', {
    get: function(){
        return "자바스크립트"; 
    }
});

result = obj.book;
js.log(result);

// error
//result = obj.book.get();

