var sales = {};
sales.Book = function(option){
    debugger;
    this.option = option;
}
sales.Book.prototype = {
    getValue: function(){
        debugger;
        return this.option;
    },
    getFirst: function(){
        return this.option + 200;
    }
}
var obj = new sales.Book(100);
obj.getValue();

