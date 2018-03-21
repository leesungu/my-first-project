// some()

var value = [20, 10, 30];
var result = value.some(function(element, index, list){
    js.log('value: ' + element);
    return element < 15;
});

js.log(result);
