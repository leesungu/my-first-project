
var obj = Object.defineProperties({}, {
    swim: {value: '수영', writable: true, enumerable: true, configurable: true},
    soccer: {value: '축구'}
});

Object.seal(obj);

try {
    Object.defineProperty(obj, "baseball", {
        value : "야구"
    });
} catch(e) {
    js.log('추가 불가: baseball');
}
