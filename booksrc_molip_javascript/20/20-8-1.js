
var obj = Object.defineProperty({}, "book", {
    value : '자바스크립트',
    writable: true, 
    enumerable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, 'book');

for (var key in desc){
    js.log(key + ': ' + desc[key]);
};

