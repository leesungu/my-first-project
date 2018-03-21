
var obj = Object.defineProperty({}, "swim", {
    swim: {value : '수영', writable: true}
});

js.log(Object.isFrozen(obj));

Object.freeze(obj);
js.log(Object.isFrozen(obj));
