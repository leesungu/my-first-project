
var obj = {};

Object.defineProperty(obj, "soccer", {
    value : "11명"
});

for (var name in obj){
    js.log(name);
}

console.dir(obj);
