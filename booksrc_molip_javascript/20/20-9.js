
var obj = Object.defineProperties({}, {
    soccer: {value: '축구', enumerable: true},
    basketball: {value: '농구'}
});

for (var name in obj){
    js.log(name + ': ' + obj[name]);
}
