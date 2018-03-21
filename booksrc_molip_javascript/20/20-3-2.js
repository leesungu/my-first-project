
var obj = {};

Object.defineProperty(obj, "soccer", {
    value : "11명",
    enumerable: true
});

for (var name in obj){
    js.log(name + ' : ' + obj[name]);
}
