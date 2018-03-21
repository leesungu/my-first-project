
window.onload = function(){
    var book = function(){
    }

    book.prototype = {
        constructor: book,
        set: function(){},
        value: 12345
    }

    var bookObj = new book();

    js.log(bookObj.constructor);
}
