
var obj = Object.defineProperty({}, "swim", {
    swim: {value : '수영', writable: true}
});

Object.freeze(obj);

try {
    Object.defineProperty(obj, "swim", {
        value : "값 변경"
    });
} catch(e) {
    js.log('value 변경 불가');
}
