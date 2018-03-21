
var obj = {};
Object.defineProperty(obj, "soccer", {
    value : "11명",
    writable: true
});

Object.preventExtensions(obj);

Object.defineProperty(obj, "soccer", {
    value : "수정_축구"
});

js.log(obj.soccer);
