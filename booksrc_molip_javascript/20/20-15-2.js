
var obj = Object.defineProperties({}, {
    swim: {value: '수영', writable: true, enumerable: true, configurable: true},
    soccer: {value: '축구'}
});

Object.seal(obj);

delete obj.swim;
js.log(obj.swim);

Object.defineProperty(obj, "swim", {
    writable: false
});

var desc = Object.getOwnPropertyDescriptor(obj, 'swim');
for (var key in desc){
    js.log(key + ': ' + desc[key]);
};
