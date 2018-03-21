
var obj = {};
Object.defineProperty(obj, "soccer", {
    value : "11명"
});

Object.preventExtensions(obj);

try {
    Object.defineProperty(obj, "baseball", {
        value : "9명"
    });
} catch(e) {
    js.log('추가 불가');
}
