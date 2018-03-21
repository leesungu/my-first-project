
var obj = Object.defineProperties({}, {
    soccer: {value: '축구', enumerable: false},
    book: {value: '자바스크립트'},
});

var names = Object.getOwnPropertyNames(obj);
for (var k = 0; k < names.length; k++){
    js.log(names[k]);
};
