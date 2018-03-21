
var obj = Object.defineProperties({}, {
    book: {value: '자바스크립트', enumerable: true},
    soccer: {value: '축구'}
});

var names = Object.keys(obj);
for (var k = 0; k < names.length; k++){
    js.log(names[k]);
};


