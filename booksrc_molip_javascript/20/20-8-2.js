
var obj = Object.defineProperty({}, 'book', {
    enumerable: true,
    get: function(){
        return 700; 
    }
});

var desc = Object.getOwnPropertyDescriptor(obj, 'book');
for (var key in desc){
    js.log(key + ': ' + desc[key]);
};
