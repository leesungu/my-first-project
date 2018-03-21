
var obj = Object.defineProperty({}, "swim", {
    swim: {value : '수영', writable: true}
});

js.log(Object.isSealed(obj));

Object.seal(obj);
js.log(Object.isSealed(obj));
