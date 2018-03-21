
var obj = {};
Object.defineProperty(obj, "soccer", {
    value : "11명"
});

js.log(Object.isExtensible(obj));

Object.preventExtensions(obj);
js.log(Object.isExtensible(obj));
